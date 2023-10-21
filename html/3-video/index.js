const video = document.querySelector('.flex')
const speed = document.querySelector('.speed')
const speedBar = document.querySelector('.speed-bar')
speed.addEventListener('mousemove', (e) => {
  let y = e.offsetY
  let percent = y / speed.offsetHeight
  let height = (percent * 100).toFixed(2) + '%'
  // console.log(height);
  speedBar.style.height = height
  const min = 0.4
  const max = 4
  const playbackRate = percent * (max - min) + min
  speedBar.textContent = playbackRate.toFixed(2) + 'x'

  // 控制视频播放速度
  video.playbackRate = playbackRate
})