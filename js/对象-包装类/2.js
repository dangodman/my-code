let obj ={
  name:'丁总',
  age:18,
}
console.log(obj.name)

// obj.girlFriend = '翠花'
// console.log(obj)

let girl = 'girlFriend'
obj[girl] = '小红'
console.log(obj)

delete obj.girlFriend //删除对象中的属性
console.log(obj)