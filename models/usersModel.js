const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error("invalid Email")
            }
        }
    },
    psw:{
        type:String,
        required:true
    }
})
const users=new mongoose.model("users",userSchema)


module.exports=users