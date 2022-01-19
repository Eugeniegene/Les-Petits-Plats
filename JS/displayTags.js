// console.log("%c displayTags.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";
import { theMillTurns } from "./google.js";
import { isFilterReload } from "./openCloseFilters.js";

var filteredRecipes = "";

export var tagsArray = [
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
    keyword.addEventListener("click", () => {
      let dataTitle = keyword.textContent;
      let dataColor = keyword.getAttribute("data-color");
      let tagObject = { title: `${dataTitle}`, color: `${dataColor}` };

      // VERIFIE SI LE TAG EST PRESENT pour éviter doublons OU lancer algo
      let verif = false;

      tagsArray.forEach((tag) => {
        // console.log(tag);
        verif = tag.title === tagObject.title;
      });

      if (!verif) {
        console.log(tagsArray.length);
        // la value devient filtre et affichage des recipes
        if (tagsArray.length === 0) {
          filteredRecipes = theMillTurns(data, tagObject.title);
          isFilterReload(filteredRecipes);
          cards.DISPLAY_CARDS(filteredRecipes);
        } else if (tagsArray.length >= 1) {
          filteredRecipes = theMillTurns(filteredRecipes, tagObject.title);
          console.log(filteredRecipes);
          isFilterReload(filteredRecipes);
          cards.DISPLAY_CARDS(filteredRecipes);
        }

        // le mot de la liste devient un tag affiché
        tagsArray.push(tagObject);
        showListOfTags(tagsArray);
        //   les keywords présents de la liste sont grisé
        tagsArray.forEach((tag) => {
          document.querySelectorAll(".filter__custom-option").forEach((li) => {
            if (tag.title.includes(li.textContent)) {
              li.classList.remove("filter__custom-option");
              li.classList.add("filter__custom-option--enable");
            }
          });
        });
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
