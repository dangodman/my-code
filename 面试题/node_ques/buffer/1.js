// commonjs
const game = require('./game.js')
var winCount = 0;

// node 内置的process对象， 相当于document
// 在命令行输入的时候 事件
process.stdin.on('data',(buffer) => {
  const action = buffer.toString().trim();
  console.log(action);
  const result = game(action)
  if(result == 1) {
    winCount++
    if(winCount == 3) {
      console.log('我不玩了!');
      process.exit()
    }
  }
})