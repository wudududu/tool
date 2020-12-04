/**
 * 
 * @param {Array} origin 
 * @description 将数组的元素从中间开始重排
 * @description eg. [1,2,3,4,5] => [3, 2, 4, 1, 5]
 */
function midSort(origin) {
  let len = origin.length;
  let res = [];
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    if (len - 1 - i == i) {
      res.unshift(origin[i]);
    } else {
      res.unshift(origin[i], origin[len - i - 1]);
    }
  }
  return res;
}

module.exports = {
  midSort
}