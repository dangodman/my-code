function a(){
  setTimeout(()=>{
  console.log('阿真')
  b()
  },1000)
}

function b(){
  setTimeout(()=>{
  console.log('10亩地')
  },0)
}


a()


