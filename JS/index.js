console.log("%c index.js", "color: green; font-weight:bold;");
("use strict");

import { renderRecipes } from "./api.js";
import * as cards from "./displayCards.js";

// RECUPERE LA DATA ET HYDRATE LES COMPOSANTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
  });
