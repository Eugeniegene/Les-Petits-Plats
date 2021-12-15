console.log("%c index.js", "color: green; font-weight:bold;");
("use strict");

import { renderRecipes } from "./api.js";
import * as cards from "./displayCards.js";

// GET ALL RECIPES + HYDRATE COMPONENTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
  });
