// 导入 express
const express = require('express')
// 导入cors
const cors = require('cors')

// 创建服务器的实例对象
const app = express()

// 配置cors
app.use(cors({
    origin:['http://127.0.0.1'],
    methods:['GET','POST']
}))

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

app.listen(8081,() => {
    console.log('api server running at http://127.0.0.1:8081')
})