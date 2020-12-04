// 居上
function topA(target, judge, act) {
  // 0 1 分布
  let num0 = 0;
  let num1 = 0;
  let num0s = [];
  let num1s = [];
  target.forEach(t => {
    judge(t) ? num1s.push(t) : num0s.push(t);
  })
  num0 = num0s.length;
  num1 = num1s.length;
  let i0 = i1 = ii = 0;
  for (let i = 0; i < target.length; i++) {
    if (i < num1) {
      act(num1s[i1]);
      i1++;
    } else {
      act(num0s[i0]);
      i0++;
    }
  }
}
// 居下
function bottomA(target, judge, act) {
  // 0 1 分布
  let num0 = 0;
  let num1 = 0;
  let num0s = [];
  let num1s = [];
  target.forEach(t => {
    judge(t) ? num1s.push(t) : num0s.push(t);
  })
  num0 = num0s.length;
  num1 = num1s.length;
  let i0 = i1 = ii = 0;
  for (let i = 0; i < target.length; i++) {
    if (i < num0) {
      act(num0s[i0]);
      i0++;
    } else {
      act(num1s[i1]);
      i1++;
    }
  }
}
// 居中算法
function midA(target, judge, act) {
  // 0 1 分布
  let num0 = 0;
  let num1 = 0;
  let num0s = [];
  let num1s = [];
  target.forEach(t => {
    judge(t) ? num1s.push(t) : num0s.push(t);
  })
  num0 = num0s.length;
  num1 = num1s.length;
  let i0 = i1 = ii = 0;
  if (num0 % 2 === 0) {
    // 0包裹1
    let pad0 = num0 / 2;
    for (let i = 0; i < target.length; i++) {
      if (i < pad0 || target.length - i - 1 < pad0) {
        act(num0s[i0]);
        i0++;
      } else {
        act(num1s[i1]);
        i1++;
      }
    }
  } else {
    if ((num1 + num0) % 2) { // num1为偶数
      // 使用num0对num1做分割
      let num = 0;
      let fama = 0;
      let t = 0;
      t = num0 - fama * 2;
      num = num1 / (t + 1);
      while (num < 1) {
        t = num0 - fama * 2;
        num = num1 / (t + 1);
        fama++;
      }
      for (let i = 0; i < target.length; i++) {
        if (i < fama || target.length - i - 1 < fama) {
          act(num0s[i0]);
          i0++;
        } else {
          if (ii < num) {
            act(num1s[i1]);
            i1++;
            ii++;
          } else {
            ii = 0;
            act(num0s[i0]);
            i0++;
          }
        }
      }
    } else {
      if (num0 === 1) {
        if (num1 === 1) {
          act(num0s[0]);
          act(num1s[0]);
        } else {
          let sl = Math.floor(num1 / 2);
          for (let i = 0; i < target.length; i++) {
            if (i === sl) {
              act(num0s[0]);
            } else {
              act(num1s[i1]);
              i1++;
            }
          }
        }
      } else {
        let fama = ~~(num0 / 2);
        for (let i = 0; i < target.length; i++) {
          if (i < fama || target.length - i - 1 < fama || i === (target.length / 2)) {
            act(num0s[i0]);
            i0++;
          } else {
            act(num1s[i1]);
            i1++;
          }
        }
      }
    }
  }
}

module.exports = {
  topA,
  bottomA,
  midA
}