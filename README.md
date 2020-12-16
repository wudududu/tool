# what I wanted I created it
## Array
1. midSort
```
// 重排数组 将数组的元素从中间开始重排
midSort([1,2,3,4,5]) => [3, 2, 4, 1, 5]
```
## Sort
1. topA
```
// 重排数组 将数组的元素按照某种前后条件，向上对齐
// 矩阵重排的基本函数
  const eg = [
    {bool: true, value: 1},
    {bool: false, value: 2},
    {bool: true, value: 3},
    {bool: false, value: 4},
  ]
  let res = [];
  let juede = t => t.bool;
  let act = t => res.push(t);
  topA(eg, juede, act)
  => res = [
    {bool: true, value: 1},
    {bool: true, value: 3},
    {bool: false, value: 2},
    {bool: false, value: 4},
  ]
```
2. bottomA
```
// 重排数组 将数组的元素按照某种前后条件，向下对齐
// 与topA类似， 具体查看测试用例
```

3. midA
```
// 重排数组 将数组的元素按照false包围true且分布尽量均匀，进行分布
// 与topA类似， 具体查看测试用例
```

## timer
1. intervalTime
```
// 设定一个函数每隔一定时间(setInterval)执行一定次数，执行完毕后调用传入的回调，可以中途取消
intervalTime(() => 1, 100, 100, () => console.log("100!")) // 100 * 100 ms后 => 100
```
## ExeRun
1. compareExeRun
```
// 比较多种程序在一定次数下的执行效率
// eg
let exes = [
  () => new Date().getTime(),
  () => +new Date(),
  () => 2 * 262144,
  () => 2 << 50
]

console.log(compareExeRun(exes, 1e7));
```