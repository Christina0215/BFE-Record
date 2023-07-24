/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  // your code here
  eval('var x=' + str.replaceAll(/"(\w+)":/g, '$1:'))
  if (str !== JSON.stringify(x)) {
    throw new Error("Nope");
  }
  return x
}