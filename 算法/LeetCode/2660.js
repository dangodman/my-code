var isWinner = function (player1, player2) {
  let oneScore = 0;
  let twoScore = 0;
  for (let i = 0; i < 2; i++) {
    player1.unshift(0);
    player2.unshift(0);
  }
  const len1 = player1.length;
  const len2 = player2.length;
  for (let i = 2; i < len1; i++) {
    if (player1[i - 1] === 10 || player1[i - 2] === 10) {
      oneScore += player1[i] * 2
    } else {
      oneScore += player1[i]
    }
  }
  for (let i = 2; i < len2; i++) {
    if (player2[i - 1] === 10 || player2[i - 2] === 10) {
      twoScore += player2[i] * 2
    } else {
      twoScore += player2[i]
    }
  }
  if (oneScore > twoScore) {
    return 1;
  } else if (oneScore < twoScore) {
    return 2;
  } else {
    return 0;
  }
};

// const player1 = [4, 10, 7, 9];
// const player2 = [6, 5, 2, 3];
const player1 = [10, 2, 2, 3];
const player2 = [3, 8, 4, 5];
console.log(isWinner(player1, player2));
