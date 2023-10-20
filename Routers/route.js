const express=require('express')
const logicModel=require('../controler/logic')
const router=new express.Router()


router.post('/express/user/registration',logicModel.userRegistration)
router.post('/express/user/added/:uid',logicModel.taskadd)
router.post('/express/user/login',logicModel.userLogin)
router.get('/express/user/task/:uid',logicModel.getAlltask)
router.post('/express/user/task/delete/:uid',logicModel.deleteTask)

module.exports=router