var countStudents = function(students, sandwiches) {
  const len = students.length
  let count = 0
  while(count < len) {
      if(students[0] === sandwiches[0]){
          students.shift(students[0])
          sandwiches.shift(sandwiches[0])
          count++
      } else {
          const top = students[0]
          students.shift(top)
          students.push(top)
          const set = new Set(students)
          if(set.has(sandwiches[0])|| count === len){
              break
          }   
      }
  }
  return len - count
};
console.log(countStudents([1,1,0,0], [0,1,0,1]))
