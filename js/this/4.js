function foo(n,m){
  console.log(this.a,n,m)
}

var a = 1
var obj = {
  a:2,
  foo:foo
}
//  foo.call(obj,100,200)

// foo.apply(obj,[100,200])

// var bar = foo.bind(obj,100,200)
// bar()

var bar = foo.bind(obj)
bar(100,200)