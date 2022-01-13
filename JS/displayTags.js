// console.log("%c displayTags.js", "color: green; font-weight:bold;");

export let tagsArray = [
  // { title: "", color: "" },
];

export const listenFilter = (keywordlist) => {
  for (const keyword of keywordlist) {
    // console.log(keyword);
    keyword.addEventListener("click", () => {
      let dataTitle = keyword.textContent;
      let dataColor = keyword.getAttribute("data-color");
      let tagObject = { title: `${dataTitle}`, color: `${dataColor}` };

      // VERIFIE SI LE TAG EST PRESENT
      let verif = false;

      tagsArray.forEach((tag) => {
        verif = tag.title === tagObject.title;
      });

      if (!verif) {
        keyword.classList.remove("filter__custom-option");
        keyword.classList.add("filter__custom-option--enable");
        tagsArray.push(tagObject);
        showListOfTags(tagsArray);
      }

      //ici funtion avec datatitle en filter
    });
  }
};

export const showListOfTags = function (arrayOfTags) {
  let tag_HTML = "";
  arrayOfTags.forEach((tag, index) => {
    tag_HTML += `<span class="tags__item tags__item--${tag.color}">
<span  class="tags__name">${tag.title}</span>
<span id="${index}" class="tags__close">
  <img src="./assets/image/remove-icon.png" alt=""
/></span>
</span>`;
    document.querySelector(".tags").innerHTML = tag_HTML;
  });

  // LISTENNER DES TAGS
  const listenToTags = (function () {
    document.querySelectorAll(".tags__close").forEach((x) => {
      x.addEventListener("click", tagIsNone);
    });
  })();
};

export const tagIsNone = (e) => {
  let ID = parseInt(e.currentTarget.id);
  // console.log(ID);
  tagsArray.splice(ID, 1);
  // console.log(tagsArray);
  showListOfTags(tagsArray);
};
