function Parent(){
  this.name = 'Tom'
  this.like = [1,2]
  this.girlfriend  = {
    n:1
  }
}
function Child(age){
  this.age = age
}

Child.prototype = new Parent()


let child1 = new Child(18,'Jhon')



// let child2 = new Child()
// child1.like.push(3)
// child1.girlfriend.n = 2  // yes
// child1.girlfriend = {n:2} // no

// console.log(child1);