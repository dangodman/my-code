// 读取用户屏幕第一行放了多少张图
// 操作下一张图，找到上一行最矮的高度，将图片排放到其下方
imgLocation('container', 'box')

function imgLocation(parent, content) { // 当前有多少张图片要摆放
  var cparent = document.getElementById(parent)
  //获得需要摆放的照片的个数
  var ccontent = getChildElement(cparent, content)  
  // 摆放图片的宽度
  var imgWidth = ccontent[0].offsetWidth
  // 整个屏幕的宽度 document.documentElement.clientWidth， num为一行可以摆放的图片的张数
  // Math.floor() 函数总是返回小于等于一个给定数字的最大整数。
  var num = Math.floor(document.documentElement.clientWidth / imgWidth)
  cparent.style.cssText = `width: ${imgWidth * num}px`

  // 将第一行中照片的高度存入数组中 
  var BoxHeightArr = []
  for (var i = 0; i < ccontent.length; i++) {
    if (i < num) {
      BoxHeightArr[i] = ccontent[i].offsetHeight
    } else { // 要操作的图
      var minHeight = Math.min.apply(null, BoxHeightArr)   //获得第一行高度最小的那张照片的高度
      // minHeight 是第几张
      var minIndex = BoxHeightArr.indexOf(minHeight)

      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px'
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
      // 更新这一列的高度
      BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
    }
  }
}

// 获得需要摆放照片的个数
function getChildElement(parent, content) {
  var contentArr = []
  // 获得container中的所有标签
  var allContent = parent.getElementsByTagName('*')    
  for (var i = 0; i < allContent.length; i++) {
    // 标签的类名等于box
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])  //添加到contentArr数组中
    }
  }
  // 函数输入获得到的数组
  return contentArr 

}
