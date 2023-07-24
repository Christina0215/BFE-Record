
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  // your code here
  return {
    css:function(prop,value){
      el.style[prop] = value
      return $(el)
    }
  }
}