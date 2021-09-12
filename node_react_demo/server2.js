let express = require('express')
let app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器了。。。')
  next()
})

app.get('/car', (req, res) => {
  let car = [
    { carName: '宝马', price: 800000 },
    { carName: '大众', price: 80000 },
    { carName: '奔驰', price: 450000 }
  ]
  res.send(car)
})

app.listen(5001, (error) => {
 if(error) return console.log('服务器异常')
 console.log('服务器启动成功了：http://localhost:5001')
})
