const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TaskSchmema = new Schema(
    {
        title:{
            type : String,
            require: true
        },
        description : {
            type:String
        },
        
   },
   {
    timestamps : true
   }
)

module.exports = mongoose.model("Task", TaskSchmema)