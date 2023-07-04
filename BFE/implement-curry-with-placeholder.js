// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  // your code here
  return function curried(...args) {
    if (args.slice(0, fn.length).includes(curry.placeholder)) {
      return (...rest) => curried.apply(this,args.map(arg => arg === curry.placeholder ? (rest.shift() ?? arg) : arg).concat(rest))
    }else{
      if(args.length >= fn.length){
        return fn.apply(this,args)
      }else{
        return function (...args2){
          return curried.apply(this,args.concat(args2))
        }
      }
    }
  }
}


curry.placeholder = Symbol()