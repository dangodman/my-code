// 监听用户敲击enter键
// 读取到input中的值
// 生成li结构
// 将input中的值添加到li中
// 将li添加到ul中
const listInput = document.querySelector('#list-input')
function makeList() {
  const list = listInput.value
  if (list.length > 0) {
    const li = `<li class="todolist">
    <input type="checkbox">
    <span>${list}</span>
  </li>`
    const ul = document.getElementById('list')
    ul.insertAdjacentHTML('afterbegin', li)
    listInput.value = ''
  }
}
listInput.onkeyup = (e) => {
  if (e.keyCode === 13) {
    makeList()
  }
}
