
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
  // your code here
  let timer = null
  let waiting = false
  let waitingArgs = null
  return (...args)=>{
    if(!timer){
      func.apply(this,args)
      timer = setTimeout(()=>{
        if(waiting){
          waiting = false
          func.apply(this,waitingArgs)
        }
        timer = null
      },wait)
    }else{
      waiting = true
      waitingArgs = args
    }
  }
}


