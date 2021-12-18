// console.log("%c api.js", "color: green; font-weight:bold;");

import * as index from "../index.js";
import { shuffle } from "./utils.js";

// GET DATA
export const GET_RECIPES = (async () => {
  await fetch("./recipes.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderRecipes.prototype.displayFilterUstensils(data.recipes);
      renderRecipes.prototype.displayFilterAppliance(data.recipes);
      renderRecipes.prototype.displayFilterIngredients(data.recipes);
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

// INGREDIENTS BTN
renderRecipes.prototype.displayFilterIngredients = function (data) {
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

  console.log(shuffle(distinctIngredients));
};

// APPLIANCE BTN
renderRecipes.prototype.displayFilterAppliance = function (data) {
  // console.log(data);
  const distinctAppliance = [
    ...new Set(
      data.map((recipe) => recipe.appliance.toLowerCase().trim()).sort()
    ),
  ];

  console.log(distinctAppliance);
};

// USTENSILS BTN
renderRecipes.prototype.displayFilterUstensils = function (data) {
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

  console.log(distinctUstensils);
};
