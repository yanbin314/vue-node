;let moduleA = (function () {
    let obj = {};

    let name = "xm";
    let age = 22;

    function sum(n1, n2) {
      return n1 + n2;
    }
    
    let flag = true;

    if (flag) {
      console.log(sum(10, 20));
    }

    obj.flag = flag;
    obj.sum = sum;

    return obj;
})();