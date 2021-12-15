// console.log("%c api.js", "color: green; font-weight:bold;");

import * as index from "../index.js";

// GET DATA
export const GET_RECIPES = (async () => {
  await fetch("./recipes.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.recipes);
      renderRecipes.prototype.displayFilterIngredients(data.recipes);
      index.GET_RECIPES_HYDRATE(data.recipes);
    })
    .catch((error) => {
      error.message;
    });
})();

// CONSTRUCTEUR
export function renderRecipes(data) {
  this.data = data;
  this.returnRecipes = function (data) {
    console.log(data);
    return data;
  };
}

renderRecipes.prototype.displayFilterIngredients = function (data) {
  console.log(data);
};

renderRecipes.prototype.displayFilterAppliance = function () {
  console.log("displayFilterAppliance");
};

renderRecipes.prototype.displayFilterUstensils = function () {
  console.log("displayFilterUstensils");
};
