let express = require('express')
let app = express()

app.use((request, response, next) => {
  console.log('有人请求服务器了。。。')
  next()
})

app.get('/student', (req, res) => {
  let student = [
    { id: '001', name: 'zs', age: 20 },
    { id: '002', name: 'lisi', age: 24 },
    { id: '003', name: 'wangwu', age: 26}
  ]
  res.send(student)
})

app.listen(5000, (error) => {
 if(error) return console.log('服务器异常')
 console.log('服务器启动成功了：http://localhost:5000')
})
