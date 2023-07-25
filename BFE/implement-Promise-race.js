
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
  // your code here
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      Promise.resolve(promise).then(value => {
        resolve(value)
      }, err => reject(err))
    }
  })
}