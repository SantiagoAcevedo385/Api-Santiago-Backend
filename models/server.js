const express=require('express');
const cors= require('cors');
const bodyParser= require('body-parser');

const dbConnection=require('../database/config')


class server{
    constructor(){
        this.app=express();
        this.port= process.env.PORT || 8087
        this.robosPath='/api/robos'
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }
    routes()
    {
        this.app.use(this.robosPath, require('../routes/robo'))
    }
    async dbConectar(){
        await dbConnection()
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}
module.exports= server