const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  // 监听数据的读取 
  res.on('data', (chunk) => {
    // console.log(chunk.toString())
    html += chunk
  })

  // 源代码获取完毕
  res.on('end', () => {
    const $ = cheerio.load(html)
    const result = []
    $('li .item').each(function (index, item) {
      const title = $('.info .title',this).text()
      const star = $('.info .bd .rating_num',this).text()
      const pic = $('.pic img',this).attr('src')
      result.push({
        title,
        star,
        pic
      })
    })
    // console.log(result)
    fs.writeFile('./list.json', JSON.stringify(result),(err,data)=>{
      if (err) {
        throw err
      }
      console.log('文件写入成功');
    })
  })





})
