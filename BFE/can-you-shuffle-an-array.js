// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(array) {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}