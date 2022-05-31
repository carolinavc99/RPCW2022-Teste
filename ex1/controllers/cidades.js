var cidades = require("../models/cidades")

module.exports.listar = () => {
    return cidades
        .find({},{_id:0, id:1, nome:1, distrito:1})
        .exec()
}

module.exports.listarDistrito = (d) => {
    return cidades
        .find({distrito:d},{_id:0, id:1, nome:1, distrito:1})
        .exec()
}

module.exports.listarDistritos = () => {
    return cidades
        .find({},{_id:0, distrito:1})
        .sort({distrito:1})
        .exec()
}


module.exports.consultar = (id) => {
    return cidades
        .findOne({id: id},{_id:0, id:1, nome:1, distrito:1})
        .exec()
}

module.exports.consultarNomes = () => {
    return cidades
        .find({},{_id:0, nome:1})
        .sort({nome:1})
        .exec()
}

