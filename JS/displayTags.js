// console.log("%c displayTags.js", "color: green; font-weight:bold;");

export let tagsArray = [
  // { title: "Blender", color: "success" },
  // { title: "Cuillère à soupe", color: "danger" },
  // { title: "Sucre", color: "primary" },
];







export const tagIsNone = (e) => {
  let ID = parseInt(e.currentTarget.id);
  // console.log(ID);
  tagsArray.splice(ID, 1);
  // console.log(tagsArray);
  showListOfTags(tagsArray);
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
  });
  document.querySelector(".tags").innerHTML = tag_HTML;

  // LISTENNER DES TAGS
  const listenToTags = (function () {
    document.querySelectorAll(".tags__close").forEach((x) => {
      x.addEventListener("click", tagIsNone);
    });
  })();
};

