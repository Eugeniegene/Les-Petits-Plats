//exemple algo boucle for et boucle sup

const fruits = ["orange", "pomme", "banane", "cerise", "kiwi", "clementine"];

const fruitsSearch = (tab, letter) => {
  let result = [];
  for (let i = 0; i < tab.length; i++) {
    let fruit = tab[i];

    for (let j = 0; j < fruit.length; j++) {
      if (fruit[j] === letter) {
        result.push(fruit);
        break;
      }
    }
  }
  return result;
};

const fruitsSearch2 = (tab, letter) => {
  let result = tab.filter((fruit) => fruit.includes(letter));
  return result;
};

console.log(fruitsSearch(fruits, "n"));
console.log(fruitsSearch2(fruits, "n"));

