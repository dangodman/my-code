// 把金数据的2000 数据 拿好的写法
const getJinData = async () => {
  let res = []
  let count = 50
  let next = 0
  const FID = 'TMBuOr'
  while(count == 50){
    let url = `https://jinshuju.net/api/v1/forms/${FID}/entries`
    if(next){
      url = `${url}?next=${next}`
    }
    const rawData = await fetch(url,{
      header:{
        
      }
    })
    const data = await rawData.json()
    count = data.count 
  }
}