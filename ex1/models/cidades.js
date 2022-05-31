const mongoose = require("mongoose")

var cidadesSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    populacao: Number,
    descricao: String,
    distrito: String
})

module.exports = mongoose.model('cidades', cidadesSchema)

