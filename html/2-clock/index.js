const secondTime = document.querySelector('.second-hand')
const minTime = document.querySelector('.min-hand')
const hourTime = document.querySelector('.hour-hand')

function setTime() {
  const now = new Date()
  // 获取当前的秒数
  const seconds = now.getSeconds()
  const secondsDegress = seconds * 6 + 90;
  secondTime.style.transform = `rotate(${secondsDegress}deg)`
  // 获取当前分钟数
  const mins = now.getMinutes()
  const minsDegress = mins * 6 + 90;
  minTime.style.transform = `rotate(${minsDegress}deg)`
  // 获取当前小时数
  const hours = now.getHours()
  const hoursDegress = hours * 30 + 90 + (mins / 60) * 30;
  hourTime.style.transform = `rotate(${hoursDegress}deg)`

}
setTime()
setInterval(setTime, 1000)