// 1.导入的{}中定义的变量
import {flag, sum} from "/a.js";
if (flag) {
  console.log("xmxmxm");
  console.log(sum(1, 1));
}
// 2.直接导入export定义的变量
import {nnn, height} from "/a.js";
console.log(nnn, height);
// 3.导入 export的function/class
import {mul, Person} from "/a.js";
console.log(mul(9, 9));
const p = new Person();
p.run();
// 4.导入 export default中的内容
import qqq from "/a.js";
qqq('dsfdsf');
// 5.统一全部导入
