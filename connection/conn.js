const mongoose = require("mongoose");

mongoose.set("strictQuery",false)
const DB_URL = "mongodb+srv://buggu_123:buggu123@cluster1.cixy0px.mongodb.net/recipe-book?retryWrites=true&w=majority";
async function getConn (){
    await mongoose.connect(DB_URL).then(()=>{
        console.log("connected to db");
    }).catch(e =>{console.log("not connected")})
}
module.exports = getConn;