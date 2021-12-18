console.log("%c utils.js", "color: green; font-weight:bold;");

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const deleteDuplicates = (array) => {
  let cleanDuplicate = [];
  array.forEach((item) => {
    cleanDuplicate.indexOf(item) == -1 ? cleanDuplicate.push(item) : "";
    return cleanDuplicate;
  });
};
