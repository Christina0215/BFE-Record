

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = { leading: true, trailing: true }) {
  let waiting = false, lastArgs = null;
  return function (...args) {
    if (!waiting) {
      if (option.leading) {
        func.apply(this, args)
      }
      waiting = true;
      let timeout = () => setTimeout(() => {
        waiting = false;
        if (lastArgs && option.trailing) {
          func.apply(this, lastArgs);
          waiting = true;
          lastArgs = null;
          timeout();
        }
      }, wait);
      timeout();
    }
    else {
      lastArgs = args
    }
  }
}