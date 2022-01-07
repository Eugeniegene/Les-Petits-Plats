console.time("index.js");
("use strict");

import { renderRecipes } from "./JS/api.js";
import * as cards from "./JS/displayCards.js";
import * as filters from "./JS/displayFilters.js";
import * as tags from "./JS/displayTags.js";

// RECUPERE LA DATA ET HYDRATE LES COMPOSANTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
    filters.DISPLAY_FILTERS(recipes);
  });

// AFFICHE LES TAGS  ET UPDATE
tags.showListOfTags(tags.tagsArray);

// // DISPLAY BTN ONCLIKCK
// let buttons = document.querySelectorAll(".filter__select");
// let buttonValue;

// buttons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     buttonValue = btn.getAttribute("value");
//     console.log(buttonValue, btn);
//     changeInputTypeInText(btn, buttonValue);
//   });
// });

// const changeInputTypeInText = (button, buttonValue) => {
//   button.setAttribute("type", "text");
//   button.setAttribute("data-value", `${buttonValue}`);
//   button.removeAttribute("value");

//   switch (buttonValue) {
//     case "Appareil":
//       // élargie le button type texte
//       button.parentNode.style.width = "50%";
//       // affiche la liste
//       button.firstChild.classList.add("filter__show");
//       // set un placeholder
//       button.setAttribute("placeholder", "Recherche un appareil");
//       // rotate de la fleche
//       button.previousElementSibling.classList.add(
//         "filter__custom-arrow--rotate"
//       );
//       break;
//     case "Ingrédients":
//       button.parentNode.style.width = "50%";
//       button.firstChild.classList.add("filter__show");
//       button.setAttribute("placeholder", "Recherche un ingrédient");
//       button.previousElementSibling.classList.add(
//         "filter__custom-arrow--rotate"
//       );
//       break;
//     case "Ustensiles":
//       button.parentNode.style.width = "50%";
//       button.firstChild.classList.add("filter__show");
//       button.setAttribute("placeholder", "Recherche un ustensile");
//       button.previousElementSibling.classList.add(
//         "filter__custom-arrow--rotate"
//       );
//       break;
//     default:
//       break;
//   }
// };

// AFFICHE LE TEMPS D'EXECUTION DU SCRIPT JS
console.timeEnd("index.js");

// EFFACE LA CONSOLE APRES 7 SECONDE
// setTimeout(() => {
//   console.clear("this is the first message");
// }, 7000);
