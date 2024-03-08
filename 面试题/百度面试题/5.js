// 1 1 2 3 5 8 13 21 

function fb(n) {
const db = [1,1]
if(n === 1 || n === 2) return 1
for (let i = 2; i < n; i++) {
  db.push(db[i-1] + db[i-2])
}
return db[n-1]
}

console.log(fb(6));

// 一道dp题 72   