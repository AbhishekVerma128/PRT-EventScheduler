const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    location:{type:String, required:true},
    startTime:{type:String, required:true},
    endTime:{type:String, required:true},
},{timestamps:true})

const eventModel = mongoose.model('EVENT', schema);

module.exports = eventModel;