console.log("%c index.js", "color: green; font-weight:bold;");
("use strict");

import { renderRecipes } from "./JS/api.js";
import * as cards from "./JS/displayCards.js";
import * as filters from "./JS/displayFilters.js";
import * as utils from "./JS/utils.js";


// RECUPERE LA DATA ET HYDRATE LES COMPOSANTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
    filters.DISPLAY_FILTERS(recipes);
  });


  
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
