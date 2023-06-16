const {Router}=require('express')

const route= Router()

const {getRobos, postRobos, putRobos, deleteRobos}=require('../controllers/robo')

route.get('/',getRobos)

route.post('/',postRobos)

route.put('/',putRobos)

route.delete('/',deleteRobos)

module.exports=route