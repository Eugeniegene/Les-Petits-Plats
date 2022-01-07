// console.log("%c displayFilters.js", "color: green; font-weight:bold;");

import { renderRecipes } from "./api.js";
import * as utils from "./utils.js";

// NEW SET : distinct INGREDIENTS
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

    // console.log(utils.shuffle(distinctIngredients));
    return utils.shuffle(distinctIngredients);
  });

// NEW SET : distinct APPLIANCE
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

// NEW SET : distinct USTENSILS
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

// HYDRATE HTML DANS LES FILTRES
const list_HTML = (renderRecipes.prototype.getList_HTML = (distinctData) => {
  let li_HTML = "";
  distinctData.map((setLi) => {
    li_HTML += `<li class="filter__custom-option">${utils.capitalize(
      setLi
    )}</li>`;
  });
  //   console.log(li_HTML);
  return li_HTML;
});

// TEST CONDITIONNEL POUR ROUTER HTML
const hydrateFilter = (renderRecipes.prototype.hydrateFilter = function (
  data,
  value,
  btn
) {
  switch (value) {
    case "Ustensiles":
      //inserer au bon endroit
      btn.insertAdjacentHTML(
        "beforend",
        `<ul class="filter__custom-menu filter__custom-menu--danger">
      ${list_HTML(displayFilterUstensils(data))}
      </ul>`
      );
    // console.log(button);

    case "Appareil":
      btn.insertAdjacentHTML(
        "beforend",
        `<ul class="filter__custom-menu filter__custom-menu--success">
      ${list_HTML(displayFilterAppliance(data))}
      </ul>`
      );
    // console.log(button);

    case "Ingrédients":
      btn.insertAdjacentHTML(
        "beforend",
        `<ul class="filter__custom-menu filter__custom-menu--primary">
      ${list_HTML(displayFilterIngredients(data))}
      </ul>`
      );
    // console.log(button);

    default:
      break;
  }
});

// FONCTION GLOBALE
export const DISPLAY_FILTERS = (renderRecipes.displayFilters = function (data) {
  document.querySelectorAll(".filter__custom-select").forEach((button) => {
    let value = button.querySelector(".filter__select").getAttribute("value");
    console.log(data, value, button);
    hydrateFilter(data, value, button);
  });
});
