
/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  const errors = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolve(value)
      }, (err) => {
        errors[i]=err
      }).finally(() => {
        count++
        if (count == promises.length) {
          reject(new AggregateError('No Promise in Promise.any was resolved',
            errors))
        }
      })
    }
  })
}