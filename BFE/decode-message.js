// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (!Array.isArray(message[0])) {
    return ''
  }
  // your code here
  const height = message.length
  const length = message[0].length
  let ans = ''
  let down = true
  for (let i = 0, j = 0; i < height, j < length;) {
    ans += message[i][j]
    if (j == length - 1) {
      break
    }
    if (down) {
      i += 1
    } else {
      i -= 1
    }
    if (i == height - 1 && down) {
      down = false
    }
    if (i == 0 && !down) {
      down = true
    }
    j++
  }
  return ans
}