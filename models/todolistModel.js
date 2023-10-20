const mongoose=require('mongoose')

const todolistSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    task:[]

})

const todos=new mongoose.model("todos",todolistSchema)

module.exports={todos}
