// console.log("%c api.js", "color: green; font-weight:bold;");

import * as index from "../index.js";

// GET DATA
export const GET_RECIPES = (async () => {
  await fetch("./recipes.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      index.GET_RECIPES_HYDRATE(data.recipes);
    })
    .catch((error) => {
      error.message;
    });
})();

// FUNCTION CONSTRUCTEUR
export function renderRecipes(data) {
  this.data = data;
  this.returnRecipes = function (data) {
    console.log(data);
    return data;
  };
}

// DISPLAY BTN ONCLIKCK
let button = document.querySelectorAll(".filter__select").forEach;
let buttonValue = button.getAttribute("value");
console.log(buttonValue);

const changeInputTypeInText = (button, buttonValue) => {
  button.setAttribute("type", "text");
  button.setAttribute("data-value", `${buttonValue}`);
  button.removeAttribute("value");
  // rotatearrow : filter__custom-arrow filter__custom-arrow--rotate
  // filter__custom-select : style : width 50%
  // filter__custom-menu ajouter filter__show
  switch (buttonValue) {
    case "Appareil":
      button.setAttribute("placeholder", "Recherche un appareil");
      break;
    case "Ingrédients":
      button.setAttribute("placeholder", "Recherche un ingrédient");
      break;
    case "Ustensiles":
      button.setAttribute("placeholder", "Recherche un ustensile");
      break;
    default:
      break;
  }
};
//changeInputTypeInText(button, buttonValue);
