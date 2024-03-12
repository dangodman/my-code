// 1,234,567 国外标准货币表达方式

function formatNumverWithCommas(number) {
  if (typeof number !== "number") return;

  // 类型转换
  number += "";
  let [interger, decimal] = number.split(".");
  // 内部函数封装 复用 整数和小数部分都要千分位
  const doSplit = (num, isInterger = true) => {
    let res = [];
    if (num === undefined) return '';

    if (isInterger) {
      num = num.split("").reverse();
    }
    for (let i = 0; i < num.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        res.push(",");
      }
      res.push(num[i]);
    }

    if (isInterger) return res.reverse().join("");
    return res.join("");
  };
  interger = doSplit(interger)
  decimal = doSplit(decimal, false);
  return interger + (decimal === '' ? '' : '.' + decimal)
}


console.log(formatNumverWithCommas(1234567))