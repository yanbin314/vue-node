let name = 'xm';
let flag = true;

function sum(n1, n2) {
  return n1 + n2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 导出方式1
export {
  flag,
  sum
}

// 导出方式2
export let nnn = 123;
export let height = 1.3;

// 导出函数/类
export function mul(n1, n2) {
  return n1 * n2;
}
export class Person {
  run() {
    console.log('i am running!');
  }
}
// 导出export default
export default function (arg) {
  console.log(arg);
}