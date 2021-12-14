console.log("%c index.js", "color: green; font-weight:bold;");
("use strict");

import * as api from "./api.js";

// DISPLAY DES COMPOSANTS
export function showElts(datas) {
  datas.forEach((recipe) => {
    console.log(recipe);
    let LE_PETIT_CHEF = new api.renderRecipes(
      recipe.appliance,
      recipe.description,
      recipe.id,
      recipe.ingredients,
      recipe.name,
      recipe.servings,
      recipe.time,
      recipe.ustensils
    );

    LE_PETIT_CHEF.displayCards();
    LE_PETIT_CHEF.listOfIngredients();
  });
}
