console.log("%c api.js", "color: green; font-weight:bold;");
import { showElts } from "./index.js";

// GET DATA
export const GET_RECIPES = (() => {
  fetch("../assets/data/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.recipes);
      showElts(data.recipes);
    })
    .catch((error) => {
      error.message;
    });
})();

export function renderRecipes(
  appliance,
  description,
  id,
  ingredients,
  name,
  servings,
  time,
  ustensils,
  index
) {
  this.appliance = appliance;
  this.description = description;
  this.id = id;
  this.ingredients = ingredients;
  this.name = name;
  this.servings = servings;
  this.time = time;
  this.ustensils = ustensils;
  this.index = index;

  this.displayCards = function () {
    let listCard_HTML = "";
    this.ingredients.map((elt) => {
      // console.log(
      //   elt.ingredient ? elt.ingredient : "",
      //   elt.quantity ? elt.quantity : "",
      //   elt.unit ? elt.unit : ""
      // );

      listCard_HTML += `<li class="card__ingredient">
        <span class="card__ingredient--bold">${
          elt.ingredient ? elt.ingredient : ""
        }</span>  ${elt.quantity ? elt.quantity : ""} ${
        elt.unit ? elt.unit : ""
      }
       </li>`;

      // console.log(listCard_HTML);
      return listCard_HTML;
    });

    document.querySelector(".cards").insertAdjacentHTML(
      "afterbegin",
      `<article class="card">
      <a href="#">
      <div class="card__thumb"></div>
      <div class="card__body">
      <div class="card__head">
      <h2 class="card__title">${name}</h2>
      <div class="card__time">
      <i class="card__timeclock"></i>
      <p class="card__minutes">${time} min</p>
      </div>
      </div>
      <div class="card__content">
      <ul class="card__ingredients">
                      ${listCard_HTML}
                      </ul>
                      <p class="card__description">
                      ${description}
                      </p>
                    </div>
                    </div>
                </a>
              </article>`
    );
  };

  this.displayFilterIngredients = function () {
    console.log("hello");
    //inner
  };
  this.displayFilterAppliance = function () {
    console.log("hello");
    //inner
  };
  this.displayFilterUstensils = function () {
    console.log("hello");
    //inner
  };
}
