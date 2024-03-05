function request(num) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(num * 10)
    },1000)
  })
}

// 第一种
// async function fn() {
// const res1 = await request(1)
// const res2 = await request(res1)
// console.log(res2)
// }

// fn()


// 第二种
// request(1).then((res) => {
//   console.log(res)
//   request(res).then((res2) => {
//     console.log(res2)
//   })
// })


// 第三种
function* gen() {
  const num1 = yield request(1)
  const num2 = yield request(num1)
  const num3 = yield request(num2)
  return num3
}

let g = gen()
const next1 = g.next()
next1.value.then((res1) =>{
  console.log(res1);
  const next2 = g.next(res1)
  next2.value.then((res2) => {
    console.log(res2)
    const next3 = g.next(res2)
    next3.value.then((res3) => {
      console.log(res3)
    })
  })
})