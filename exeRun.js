/**
 * 快捷比较多种程序执行速度快慢
 */
function compareExeRun(exes, exetime) {
  let exeMap = {};
  for(let i = 0; i < exes.length; i++) {
    let t = exeMap[`exe${i}`] = {};
    t.start = new Date().getTime();
    for (let j = 0; j < exetime; j++) {
      exes[i]();
    }
    t.end = new Date().getTime();
    t.used = t.end - t.start;
  }
  return exeMap;
}

// eg
let exes = [
  () => new Date().getTime(),
  () => +new Date(),
  () => 2 * 262144,
  () => 2 << 50
]

console.log(compareExeRun(exes, 1e7));

module.exports = {
  compareExeRun
}