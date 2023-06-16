const {Schema, model}=require('mongoose')

const RoboSchema=Schema({
    Direccion: {
        type: String,
        required:[true, 'La dirección es obligatoria']
    },
    Latitud:{
        type: Number,
        minlenght: [6.13, "El valor minimo debe ser 6.13"],
        maxlenght: [6.217, "El valor máximo debe ser 6.217"],
        required: [true, 'La latitud debe ser obligatoria']
    },
    Longitud: {
        type: Number,
        minlenght: [-75.567, "El valor minimo debe ser -75.567"],
        maxlenght: [-75.34, "El valor máximo debe ser -75.34"],
        required: [true, 'La latitud debe ser obligatoria']
    },
    Descripcion: {
        type: String,
        required: [true, 'La descricipción debe ser obligatoria']
    },
    Fecha:{
        type:Date,
        default: new Date()
    },
})
module.exports=model('Robos', RoboSchema)