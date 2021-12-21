console.log("%c index.js", "color: green; font-weight:bold;");
("use strict");

import { renderRecipes } from "./JS/api.js";
import * as cards from "./JS/displayCards.js";
import * as utils from "./JS/utils.js";
import * as filters from "./JS/displayFilters.js";

// RECUPERE LA DATA ET HYDRATE LES COMPOSANTS
export const GET_RECIPES_HYDRATE = (renderRecipes.prototype.getAllRecipes =
  function (recipes) {
    // console.log(recipes);
    cards.DISPLAY_CARDS(recipes);
    filters.DISPLAY_FILTERS(recipes);
  });
