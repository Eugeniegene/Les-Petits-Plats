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

// ASSURE L'OUVERTURE ET LA FERMETURE DES FILTRES
let buttons = document.querySelectorAll(".filter__select");
let buttonValue;
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttonValue = btn.getAttribute("value");
    // console.log(buttonValue, btn);
    isFiltersInteractive(btn, buttonValue);
  });
});

// permet d'ouvrir et de fermer les filtres / btn
const isFiltersInteractive = (btn, buttonValue) => {
  // composant liste de mots clés
  const displayKeyword = btn.nextElementSibling;
  if (displayKeyword.classList.contains("filter__show")) {
    closeSelectMenu(
      // supprime le placeholder, attribue une value, attribue un type button
      displayKeyword.previousElementSibling,
      // supprime la class CSS assurant l'affichange
      displayKeyword,
      // réduit la largeur du composant
      displayKeyword.parentNode,
      // assure la rotation de la flèche vers le haut
      displayKeyword.parentNode.firstElementChild
    );
  } else {
    // vérifie si les filtres sont ouverts ailleurs pour les fermer
    isFilterClosed();
    // ouvre le filtre sélectionné
    changeInputTypeInText(btn, buttonValue);
  }
};

// ferme le menu sélectionné
const closeSelectMenu = (inputBtn, filterShow, parentWidth, rotateArrow) => {
  inputBtn.setAttribute("type", "button");
  inputBtn.setAttribute("value", `${inputBtn.getAttribute("data-value")}`);
  inputBtn.removeAttribute("placeholder");
  filterShow.classList.remove("filter__show");
  parentWidth.style.width = "170px";
  rotateArrow.classList.remove("filter__custom-arrow--rotate");
};

// vérifie si les filtres sont ouverts ailleurs pour les fermer
const isFilterClosed = () => {
  document.querySelectorAll(".filter__custom-menu").forEach((filter) => {
    if (filter.classList.contains("filter__show")) {
      closeSelectMenu(
        // supprime le placeholder, attribue une value, attribue un type button
        filter.previousElementSibling,
        // supprime la class CSS assurant l'affichange
        filter,
        // réduit la largeur du composant
        filter.parentNode,
        // assure la rotation de la flèche vers le haut
        filter.parentNode.firstElementChild
      );
    }
  });
};

const changeInputTypeInText = (button, buttonValue) => {
  button.setAttribute("type", "text");
  button.setAttribute("data-value", `${buttonValue}`);
  button.removeAttribute("value");

  switch (buttonValue) {
    case "Appareil":
      // élargie le button type texte
      button.parentNode.style.width = "66%";
      // set un placeholder
      button.setAttribute("placeholder", "Recherche un appareil");
      // affiche la liste
      button.nextElementSibling.classList.add("filter__show");
      // rotate de la fleche
      button.previousElementSibling.classList.add(
        "filter__custom-arrow--rotate"
      );
      break;
    case "Ingrédients":
      button.parentNode.style.width = "66%";
      button.setAttribute("placeholder", "Recherche un ingrédient");
      button.nextElementSibling.classList.add("filter__show");
      button.previousElementSibling.classList.add(
        "filter__custom-arrow--rotate"
      );
      break;
    case "Ustensiles":
      button.parentNode.style.width = "66%";
      button.setAttribute("placeholder", "Recherche un ustensile");
      button.nextElementSibling.classList.add("filter__show");
      button.previousElementSibling.classList.add(
        "filter__custom-arrow--rotate"
      );
      break;
    default:
      break;
  }
};

// AFFICHE LE TEMPS D'EXECUTION DU SCRIPT JS
console.timeEnd("index.js");

// EFFACE LA CONSOLE APRES 7 SECONDE
// setTimeout(() => {
//   console.clear("this is the first message");
// }, 7000);
