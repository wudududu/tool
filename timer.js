/**
 * 
 * @param {Function} func 
 * @param {Number} tm 
 * @param {Number} time // 运行次数
 */
function intervalTime(func, tm, time = 10, resolve) {
  let _timer = null;
  let _t = 0;
  let _func = _ => {
    func();
    _t++;
    if (_t === time) {
      clearInterval(_timer);
      resolve(time);
    };
  }
  _timer = setInterval(_func, tm);
  return _timer;
}

module.exports = {
  intervalTime
}