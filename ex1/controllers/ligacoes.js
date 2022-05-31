var ligacoes = require("../models/ligacoes")

module.exports.listar = () => {
    return ligacoes
        .find()
        .exec()
}

module.exports.consultar = (id) => {
    return ligacoes
        .find({_id: id})
        .exec()
}

module.exports.listarLigacoesOrigem = (or) => {
    return ligacoes
        .find({origem: or},{_id:0, id:1, destino:1})
        .exec()
}

module.exports.listarLigacoesDistancia = (dist) => {
    return ligacoes
        .find({},{_id:0, id:1, destino:1})
        .sort({distancia: {$gte: dist}})
        .exec()
}

