// console.log("%c api.js", "color: green; font-weight:bold;");

import * as index from "../index.js";
import { capitalize, shuffle } from "./utils.js";

// GET DATA
export const GET_RECIPES = (async () => {
  await fetch("./recipes.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderRecipes.displayBtn(data.recipes);
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

const getOptionsList = (distinctData) => {
  let li_HTML = "";
  distinctData.map((setLi) => {
    li_HTML += `<li class="filter__custom-option">${capitalize(setLi)}</li>`;
  });
  // console.log(li_HTML);
  return li_HTML;
};

// distinct INGREDIENTS BTN LIST
const displayFilterIngredients =
  (renderRecipes.prototype.displayFilterIngredients = function (data) {
    // console.log(data);
    const distinctIngredients = [
      ...new Set(
        data
          .map((recipe) =>
            recipe.ingredients.map((ingredient) =>
              ingredient.ingredient.toLowerCase().trim()
            )
          )
          .flat()
          .sort()
      ),
    ];

    // console.log(shuffle(distinctIngredients));
    return distinctIngredients;
  });

// distinct APPLIANCE BTN LIST
const displayFilterAppliance = (renderRecipes.prototype.displayFilterAppliance =
  function (data) {
    // console.log(data);
    const distinctAppliance = [
      ...new Set(
        data.map((recipe) => recipe.appliance.toLowerCase().trim()).sort()
      ),
    ];

    // console.log(distinctAppliance);
    return distinctAppliance;
  });

// distinct USTENSILS BTN LIST
const displayFilterUstensils = (renderRecipes.prototype.displayFilterUstensils =
  function (data) {
    // console.log(data);
    const distinctUstensils = [
      ...new Set(
        data
          .map((recipe) =>
            recipe.ustensils.map((item) => item.toLowerCase().trim())
          )
          .flat()
          .sort()
      ),
    ];
    // console.log(distinctUstensils);
    return distinctUstensils;
  });

const hydrateFilter = (data, value, btn) => {
  switch (value) {
    case "Ustensiles":
      btn.innerHTML = `<ul class="filter__custom-menu filter__custom-menu--danger">
        ${getOptionsList(displayFilterUstensils(data))}
        </ul>`;
    // console.log(button);

    case "Appareil":
      btn.innerHTML = `<ul class="filter__custom-menu filter__custom-menu--danger">
        ${getOptionsList(displayFilterAppliance(data))}
        </ul>`;
    // console.log(button);

    case "Ingrédients":
      btn.innerHTML = `<ul class="filter__custom-menu filter__custom-menu--danger">
        ${getOptionsList(displayFilterIngredients(data))}
        </ul>`;
    // console.log(button);

    default:
      break;
  }
};

renderRecipes.displayBtn = function (data) {
  document.querySelectorAll(".filter__select").forEach((button) => {
    let value = button.getAttribute("value");
    hydrateFilter(data, value, button);
  });
};

// document.querySelectorAll(".filter__select").forEach((filter) => {
//   filter.addEventListener("click", renderRecipes.displayBtn());
// });

//DISPLAY BTN ONCLIKCK
// let buttonValue = button.getAttribute("value");
// console.log(buttonValue);

// const changeInputTypeInText = (button, buttonValue) => {
//   button.setAttribute("type", "text");
//   button.setAttribute("data-value", `${buttonValue}`);
//   button.removeAttribute("value");
//   switch (buttonValue) {
//     case "Appareil":
//       button.setAttribute("placeholder", "Recherche un appareil");
//       break;
//     case "Ingrédients":
//       button.setAttribute("placeholder", "Recherche un ingrédient");
//       break;
//     case "Ustensiles":
//       button.setAttribute("placeholder", "Recherche un ustensile");
//       break;
//     default:
//       break;
//   }
// };
// changeInputTypeInText(button, buttonValue);
