// console.log("%c displayTags.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";
import { theMillTurns } from "./google.js";
import { isFilterReload } from "./openCloseFilters.js";
import { deleteDuplicatesGoogled } from "./utils.js";

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
  var filteredRecipes = data;
  for (const keyword of keywordlist) {
    keyword.addEventListener("click", () => {
      let dataTitle = keyword.textContent;
      let dataColor = keyword.getAttribute("data-color");
      let tagObject = { title: `${dataTitle}`, color: `${dataColor}` };

      // VERIFIE SI LE TAG EST PRESENT pour éviter doublons OU lancer algo
      let inTagsArray = false;

      tagsArray.forEach((tag) => {
        // console.log(tag);
        inTagsArray = tag.title === tagObject.title;
      });

      if (!inTagsArray) {
        // console.log(tagsArray.length);
        // console.log(filteredRecipes);

        filteredRecipes = theMillTurns(filteredRecipes, tagObject.title);
        let distinctFilteredRecipes = deleteDuplicatesGoogled(filteredRecipes);
        isFilterReload(distinctFilteredRecipes);
        cards.DISPLAY_CARDS(distinctFilteredRecipes);
        console.log(distinctFilteredRecipes);

        // SI RESTE UNE CARD ALORS DESACTIVATION DES LI
        if (filteredRecipes.length === 1) {
          document.querySelectorAll(".filter__custom-option").forEach((li) => {
            li.classList.remove("filter__custom-option");
            li.classList.add("filter__custom-option--enable");
          });
        }
        // AU CLICK LES LI DEVIENT UN TAG AFFICHé
        tagsArray.push(tagObject);
        showListOfTags(tagsArray);
        // AU CLICK LE LI DEVIEN INACTIF ET GRISE
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
