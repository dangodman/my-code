// let obj = {
//   a:1,
//   b:2
// }
// var arr = []
// obj[arr] = 3
// console.log(obj);

let map = new Map([['name','老王']])
// map.set({a:1},'hello')
let obj = {a:1}
map.set(obj,'hello')
// console.log(map)
// console.log(map.get('name'))
// console.log(map.get(obj))


// map.forEach((value,key,map)=>{
//   console.log(value,key,map);
// })
console.log([...map])