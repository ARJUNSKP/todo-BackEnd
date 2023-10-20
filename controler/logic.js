const users=require('../models/usersModel')
const models=require('../models/todolistModel')

const userRegistration=(req,res)=>{
    const {email,psw}=req.body
    users.findOne({email,psw}).then(user=>{
        if(user){
            res.status(401).json("user is present please Login")
        }
        else{
            var newUser=new users(
                {   
                    email,
                    psw
                }
            )
            newUser.save()
            res.status(200).json('user registered')
        }
    })
}
const taskadd=(req,res)=>{
    const {uid}=req.params
    const {tname,startdate,enddate}=req.body
    if(!uid || !tname || !startdate || !enddate ){
        res.status(400).json("all field are required")
    }
    else{
        try{
            models.todos.findOne({uid}).then(todos=>{
                if(todos){
                    todos.task.push({tname,startdate,enddate})
                    todos.save()
                    res.status(200).json('add task')
                }
                else{
                    const newTaskAdd=new models.todos({
                        uid,
                        task:[{tname,startdate,enddate}]
                    })
                    newTaskAdd.save()
                    res.status(200).json('add task new user')
                }
            })
        }
        catch{
            res.status(400).json("connection error")
        }
    }
}

const getAlltask=(req,res)=>{
    const {uid}=req.params
    if(!uid){
        res.status(400).json("uid is required")
    }
    else{
        try{
            models.todos.findOne({uid}).then(todos=>{
                if(todos){
                    res.status(200).json(todos.task)
                }else{
                    res.status(400).json("not found task")
                }
            })
        }catch{
            res.status(400).json("connection error")
        }
    }
}
const deleteTask=(req,res)=>{
    const {uid}=req.params
    const {tname}=req.body
    if(!tname){
        res.status(400).json("fname field are required")
    }else{
        try{
            models.todos.findOne({uid}).then(todo=>{
                if(todo){
                    for(let i in todo.task){
                        if(todo.task[i].tname==tname){
                            todo.task.splice(i,1)
                            todo.save()
                            res.json("delete task")
                        }
                    }
                }
                else{
                    res.status(400).json("task is not present")
                }
            })
        }catch{
            res.status(400).json("connection error")
        }
    }
}
const userLogin=(req,res)=>{
    const {email,psw}=req.body
    users.findOne({email,psw}).then(user=>{
        if(user){
            res.status(200).json({"uid":user._id})
        }
        else{
            res.status(400).json("incorrect username or password")
        }
    })
}

module.exports={
    userRegistration,
    taskadd,
    userLogin,
    getAlltask,
    deleteTask
}