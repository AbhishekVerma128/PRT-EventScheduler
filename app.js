const express = require("express")
const app = express();
const conn = require('./connection/conn')
const event = require("./routes/event")
conn()
app.use(express.json())
app.use(event)
app.listen(5000,()=>console.log("server is up"))