// console.log("%c displayTags.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";
import * as filters from "./displayFilters.js";
import { theMillTurns } from "./google.js";

export let tagsArray = [
  // { title: "", color: "" },
];

const tagIsNone = (e) => {
  let ID = e.currentTarget.id;
  // console.log(ID);
  ID = parseInt(ID);
  tagsArray.splice(ID, 1);
  // console.log(tagsArray);
  showListOfTags(tagsArray);
};

export const listenFilter = (data, keywordlist) => {
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
        // le mot de la lite est grisé
        keyword.classList.remove("filter__custom-option");
        keyword.classList.add("filter__custom-option--enable");
        // le mot de la liste devient un tag affiché
        tagsArray.push(tagObject);
        showListOfTags(tagsArray);
        // la value devient filtre et affichage des recipes
        const filteredRecipes = theMillTurns(data, tagObject.title);
        console.log(filteredRecipes);
        cards.DISPLAY_CARDS(filteredRecipes);
        filters.DISPLAY_FILTERS(filteredRecipes);
      }
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
  });
  document.querySelector(".tags").innerHTML = tag_HTML;

  // LISTENNER DES TAGS
  const listenToTags = (function () {
    document.querySelectorAll(".tags__close").forEach((X) => {
      X.addEventListener("click", tagIsNone);
    });
  })();
};
