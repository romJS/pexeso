export const NUMBER_OF_CARDS = 16;
/**
 * creates an array of cards with unique ID
 * @returns {array}
 */
export const createCards = () =>
  shuffle(
    Array.from({ length: NUMBER_OF_CARDS }).map((item, index) => ({
      id: index + 1,
      cardName:
        index + 1 > NUMBER_OF_CARDS / 2
          ? index + 1 - NUMBER_OF_CARDS / 2
          : index + 1
    }))
  );

/**
 * randomly changes order of items in array
 * @param {array}
 * @returns {array} "Retun shuffled array"
 */
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
