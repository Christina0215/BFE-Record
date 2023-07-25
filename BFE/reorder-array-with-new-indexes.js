/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  // reorder items inline
  // b a c d e f 
  // 5 1 4 3 2 0

  // f a c d e b
  // 0 1 4 3 2 5

  // f a e d c b
  // 0 1 2 3 4 5
  for (let i = 0;i < items.length;){
    if(i == newOrder[i]){
      i++
      continue
    }else{
      [items[newOrder[i]],items[i]] = [items[i],items[newOrder[i]]]
      [newOrder[newOrder[i]],newOrder[i]] = [newOrder[i],newOrder[newOrder[i]]]
    }
  }
}
