// console.log("%c google.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";

export let IS_GOOGLE = (recipes) => {
  // LISTEN INPUT BARRE DE RECHERCHE
  const takeIt = document.querySelector(".search__input");

  takeIt.addEventListener("input", () => {
    if (takeIt.value.length > 2) {
      //   console.log(takeIt.value);
      const googledRecipes = theMillTurns(recipes, takeIt.value);
      console.log(googledRecipes);
      cards.DISPLAY_CARDS(googledRecipes);
    }

    //FILTER KEYWORDS DE RECHERCHE
  });
};

let theMillTurns = (recipes, filter) => {
  //   console.log(recipes, filter);
  let googledCards = [];

  recipes.map((recipe) => {
    // console.log(recipe);
    if (
      // une recette ?
      recipe.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
      recipe.description
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim()) ||
      // un appareil ?
      recipe.appliance
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim())
    ) {
      googledCards.push(recipe);
      //   console.log(cards);
    }
    // un ustensil ?
    recipe.ustensils.map((ustensil) => {
      if (ustensil.toLowerCase().trim().includes(filter.toLowerCase().trim())) {
        googledCards.push(recipe);
      }
    });

    // un ingredient ?
    recipe.ingredients.map((ingredient) => {
      if (
        ingredient.ingredient
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim())
      ) {
        googledCards.push(recipe);
      }
    });
  });
  //   console.log(cards);
  return googledCards;
};
