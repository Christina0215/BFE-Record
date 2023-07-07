/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  // your code here
  return function (x) {
    return funcs.reduce((pre, curr) => curr(pre), x)
  }
}