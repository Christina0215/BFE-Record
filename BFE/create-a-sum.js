function sum(num) {
  const func = function(num2) { // #4
    return num2 ? sum(num+num2) : num; // #3
  }
  
  func.valueOf = () => num; // #2
  return func; // #1
}