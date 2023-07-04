// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  return depth !== 0 ? arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur)
  }, []) : arr.slice()
}