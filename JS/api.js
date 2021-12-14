console.log("%c api.js", "color: green; font-weight:bold;");

GET_RECIPES = (function () {
  fetch("../assets/data/db.json")
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data.recipes);
      showElts(data.recipes);
    });
})();

function renderRecipes(
  appliance,
  description,
  id,
  ingredients,
  name,
  servings,
  time,
  ustensils
) {
  this.appliance = appliance;
  this.description = description;
  this.id = id;
  this.ingredients = ingredients;
  this.name = name;
  this.servings = servings;
  this.time = time;
  this.ustensils = ustensils;

  this.displayCards = function () {
    document.querySelector(".cards").innerHTML += innerComponent.CARD;
  };

  this.listOfIngredients = function () {
    for (const ingredient of this.ingredients) {
      return `
      <li class="card__ingredient">
      <span class="card__ingredient--bold">${ingredient.ingredient}</span>${ingredient.quantity} ${ingredient.unit}
      </li>`;
    }
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

  const innerComponent = {
    CARD: `<article class="card">
                <a href="#">
                  <div class="card__thumb"></div>
                  <div class="card__body">
                    <div class="card__head">
                      <h2 class="card__title">${this.name}</h2>
                      <div class="card__time">
                        <i class="card__timeclock"></i>
                        <p class="card__minutes">${this.time} min</p>
                      </div>
                    </div>
                    <div class="card__content">
                      <ul class="card__ingredients">
                      ${this.listOfIngredients()}
                      </ul>
                      <p class="card__description">
                      ${this.description}
                      </p>
                    </div>
                  </div>
                </a>
              </article>`,
  };
}

function showElts(datas) {
  datas.forEach((recipe) => {
    let display_LEPETITCHEF = new renderRecipes(
      recipe.appliance,
      recipe.description,
      recipe.id,
      recipe.ingredients,
      recipe.name,
      recipe.servings,
      recipe.time,
      recipe.ustensils
    );
    console.log(display_LEPETITCHEF);

    display_LEPETITCHEF.displayCards();
    display_LEPETITCHEF.listOfIngredients();
  });
}
