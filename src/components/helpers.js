export const NUMBER_OF_CARDS = 16;
/**
 * creates an array of cards with unique ID
 * @returns {array}
 */
export const createCards = () => {
  const cards = [];
  for (let i = 1; i <= NUMBER_OF_CARDS; i++) {
    cards.push({
      id: i,
      cardName: i > NUMBER_OF_CARDS / 2 ? i - NUMBER_OF_CARDS / 2 : i /// file name is a number
    });
  }
  return shuffle(cards);
};

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
