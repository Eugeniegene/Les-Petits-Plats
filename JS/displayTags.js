let tagsArray = [
  { title: "Blender", color: "success" },
  { title: "Cuillère à soupe", color: "danger" },
  { title: "Sucre", color: "primary" },
];

const tagIsNone = (e) => {
  // console.log(e.currentTarget.id);
  let ID = e.currentTarget.id;
  ID = parseInt(ID);
  tagsArray.splice(ID, 1);
  // console.log(tagsArray);
  showListOfTags(tagsArray);
};

const showListOfTags = function (arrayOfTags) {
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
    document.querySelectorAll(".tags__close").forEach((X) => {
      X.addEventListener("click", tagIsNone);
    });
  })();
};

showListOfTags(tagsArray);
