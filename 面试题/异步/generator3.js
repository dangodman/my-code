function a(next) {
  setTimeout(() => {
    console.log("a 完成");
    next()
  }, 1000);
}

function b(next) {
  setTimeout(() => {
    console.log("b 完成");
    next()
  }, 500);
}
function c(next) {
    console.log("c 完成");
  next()
}


function* g() {
  yield a;
  yield b;
  yield c;
}
// let gen = g()
// let result = gen.next()
// console.log(result.value)

function run(fn) {
  let  gen = fn()

  function next(err,data) {
    let result = gen.next(data)
    if(result.done) return 
    result.value(next)  // a()
  }
  next()
}

run(g)