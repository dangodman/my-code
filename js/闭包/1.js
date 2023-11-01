var arr = []
for(var i = 0; i <10;i++) {
  
  // arr[i] = function(i) { 
  //   console.log(i)
  // }
  (function(j){
    arr[i] = function() {
      console.log(j)
    }
  })(i)
}


for(var j=0;j<arr.length;j++) {
  arr[j]()
}