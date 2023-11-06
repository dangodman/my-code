
var b = 1
function foo() {
  var b = 2
  bar()
}

function bar(){
  baz()
}
function baz(){
  console.log(this.b)
}


foo()