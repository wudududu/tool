const chai = require('chai').expect;
const { expect } = require('chai');
const { midSort } = require('./array');
const { topA, bottomA, midA } = require('./sort');
const { intervalTime } = require('./timer');

// class Array
describe('Array', function() {
  describe('#midSort()', function() {
    it('sort Array form middle to two side', function() {
      expect(JSON.stringify(midSort([1,2,3,4,5]))).to.equal(JSON.stringify([3, 2, 4, 1, 5]));
    });
  });
});

// class tool
describe('tool sort', function() {
  const eg = [
    {bool: true, value: 1},
    {bool: false, value: 2},
    {bool: true, value: 3},
    {bool: false, value: 4},
  ]
  let res = [];
  let juede = t => t.bool;
  let act = t => res.push(t);
  let mapRes = _ => res.map(r => r.value);

  it('sort element to top', function() {
    res = [];
    topA(eg, juede, act);
    expect(JSON.stringify(mapRes())).to.equal(JSON.stringify([1, 3, 2, 4]));
  });

  it('sort element to bottom', function() {
    res = [];
    bottomA(eg, juede, act);
    expect(JSON.stringify(mapRes())).to.equal(JSON.stringify([2, 4, 1, 3]));
  });

  it('sort element to mid', function() {
    res = [];
    midA(eg, juede, act);
    expect(JSON.stringify(mapRes())).to.equal(JSON.stringify([2, 1, 3, 4]));
  });
})

// timer
describe('tool timer', function() {
  it('interval  fix time', function(done) {
    let r = 1,
        _r = 1,
        func = _ => r++;
        time = 10;
        tm = 100;
    new Promise((resolve) => {
      intervalTime(func, tm, time, resolve);
    }).then(_ => {
      if (r === (_r + time)) {
        done()
      }
    });
  })
})