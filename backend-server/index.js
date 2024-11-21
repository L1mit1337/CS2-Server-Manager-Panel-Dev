BigInt.prototype.toJSON = function () { return this.toString() }; //加上以下代码防止JSON序列化报错
const express = require("express")
const cors = require("cors")
const lowDb = require("lowdb")
const { Server, Options,RCON} = require('@fabricio-191/valve-server-query');
const FileSync = require("lowdb/adapters/FileSync")
const bodyParser = require("body-parser")
const db = lowDb(new FileSync('db.json'))
const app = express()

//解决跨域问题
app.all('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
})
app.use(cors())
app.use(bodyParser.json())

const PORT = 3001;

app.post('/api/db/queryAllServerList', (req, res) => {
    const data = db.get("serverList").value()
    console.log('执行queryAllServerList',data)
    return res.json(data)

})

app.post('/api/db/insertNewServer', async (req, res) => {
    let idCount=db.get("AutoIncrementIdCount").value()
    const note = req.body
    await db.get("serverList").push({id:idCount,...note}).write()
    await db.set("AutoIncrementIdCount", idCount+1).write()
    await res.json({ success: true })
})

//post请求用req.body

app.post('/api/getInfo/', (req, res) => {
    console.log(req.body);
    console.log(req.body.port)
    Server.getInfo(req.body)
        .then(info => res.json(info)) // might have the same problem with bigints
        .catch(e => res.status(500).json({ error: e.message }));
    console.log("调用/api/getInfo/")
});

app.post('/api/getPlayers/', (req, res) => {
    Server.getPlayers(req.body)
        .then(players => res.json(players))
        .catch(e => res.status(500).json({ error: e.message }));
});

app.post('/api/getRules/', (req, res) => {
    Server.getRules(req.body)
        .then(rules => res.json(rules))
        .catch(e => res.status(500).json({ error: e.message }));
});

app.post('/api/execRconCommand/', async (req, res) => {

    console.log(req.body);
    const rcon = await RCON(req.body);
    const response = await rcon.exec(req.body.command);
    console.log("成功执行")
    res.header('Access-Control-Allow-Origin','*')
    res.send(response);
})

app.listen(PORT, ()=> {
    console.log(`CS2服务器管理面板后端服务器 端口${PORT} 地址:http://localhost:${PORT}`)
})