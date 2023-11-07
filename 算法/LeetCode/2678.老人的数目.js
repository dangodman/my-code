var countSeniors = function(details) {
  let count = 0
    details.forEach(function(item){
        let str = item
        let age = str.substring(11,13)
        if(age>60){
          count++
        }
    })
    return count
};

details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
console.log(countSeniors(details));