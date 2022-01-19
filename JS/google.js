// console.log("%c google.js", "color: green; font-weight:bold;");

import * as cards from "./displayCards.js";
import * as filters from "./displayFilters.js";

export let theMillTurns = (recipes, filter) => {
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
    recipe.ustensils.filter((elt) => {
      //   console.log(elt, filter);
      if (elt.toLowerCase().includes(filter.toLowerCase())) {
        // console.log(recipe);
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
  console.log(googledCards);
  return googledCards;
};

// LISTEN INPUT BARRE DE RECHERCHE
export let IS_GOOGLE = (recipes) => {
  const takeIt = document.querySelector(".search__input");

  takeIt.addEventListener("input", () => {
    // si le nbre de lettre dépasse 2 alors :  LANCER ALGO
    if (takeIt.value.length > 2) {
      //   console.log(takeIt.value);
      const googledRecipes = theMillTurns(recipes, takeIt.value);
      //   console.log(googledRecipes);
      cards.DISPLAY_CARDS(googledRecipes);
      filters.DISPLAY_FILTERS(googledRecipes);
    } else {
      // SINON TABLEAU DES RECETTES
      cards.DISPLAY_CARDS(recipes);
      filters.DISPLAY_FILTERS(recipes);
    }
  });
};

// LISTEN FOREACH INPUT FILTER
export let IS_TAGGED = (recipes) => {
  // LISTEN INPUT BARRE DE RECHERCHE DU FILTRE
  const takeFilter = document.querySelectorAll(".filter__select");

  takeFilter.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.length > 2) {
        //   console.log(takeFilter.value);
        const googledRecipes = theMillTurns(recipes, input.value);
        // console.log(googledRecipes);
        cards.DISPLAY_CARDS(googledRecipes);
        filters.DISPLAY_FILTERS(googledRecipes);
      }
    });
  });
};
