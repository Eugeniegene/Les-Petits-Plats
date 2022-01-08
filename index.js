console.time("index.js");
("use strict");

import { renderRecipes } from "./JS/api.js";
import * as cards from "./JS/displayCards.js";
import * as tags from "./JS/displayTags.js";
import * as filters from "./JS/displayFilters.js";
import * as openclosefilters from "./JS/openCloseFilters.js";

// RECUPERE LA DATA ET HYDRATE LES COMPOSANTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
    filters.DISPLAY_FILTERS(recipes);
  });

// AFFICHE LES TAGS  ET UPDATE
tags.showListOfTags(tags.tagsArray);

// ASSURE L'OUVERTURE ET LA FERMETURE DES FILTRES
let buttons = document.querySelectorAll(".filter__select");
let buttonValue;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttonValue = btn.getAttribute("value");
    // console.log(buttonValue, btn);
    openclosefilters.isFiltersInteractive(btn, buttonValue);
  });
});

// AFFICHE LE TEMPS D'EXECUTION DU SCRIPT JS
console.timeEnd("index.js");

// EFFACE LA CONSOLE APRES 7 SECONDE
setTimeout(() => {
  console.clear("this is the first message");
}, 7000);
