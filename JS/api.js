console.log("%c api.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";
import * as index from "./index.js";

// GET DATA
export const GET_RECIPES = (() => {
  fetch("../assets/data/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.recipes);
      index.GET_RECIPES_HYDRATE(data.recipes);
    })
    .catch((error) => {
      error.message;
    });
})();

export function renderRecipes(data) {
  this.data = data;
  this.returnRecipes = function (data) {
    console.log(data);
    return data;
  };
}

renderRecipes.prototype.displayFilterIngredients = function () {
  console.log("displayFilterIngredients");
};

renderRecipes.prototype.displayFilterAppliance = function () {
  console.log("displayFilterAppliance");
};

renderRecipes.prototype.displayFilterUstensils = function () {
  console.log("displayFilterUstensils");
};
