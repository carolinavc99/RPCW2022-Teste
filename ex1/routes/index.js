var express = require('express');
const app = require('../app');
var router = express.Router();
var Cidades = require("../controllers/cidades")
var Ligacoes = require("../controllers/ligacoes");
const ligacoes = require('../models/ligacoes');

router.get("/api/cidades", (req, res, next) => {
  console.log(req.query['distrito'])
  if(req.query['distrito'] != undefined) {
    Cidades.listarDistrito(req.query['distrito'])
      .then(dados => {
        res.status(200).jsonp(dados)
      })
      .catch(error => {
        res.status(500)
          .jsonp({erro: error})
      })
  }
  else {Cidades.listar()
      .then(dados => {
        res.status(200).jsonp(dados)
      })
      .catch(error => {
        res.status(500)
          .jsonp({erro: error})
      })
    }
    });

router.get("/api/cidades/nomes", (req, res, next) => {
  Cidades.consultarNomes(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(error => {
      res.status(500)
        .jsonp({erro: error})
    })
});

router.get("/api/distritos", (req, res, next) => {
  Cidades.listar()
    .then(dados => {
      distritos = new Array()
      dados.forEach(e => {
        if (!(distritos.includes(e.distrito))) {
          distritos.push(e.distrito)
        }
      })
      dados.forEach(e => {
        indice = distritos.indexOf(e.distrito)
        distritos[indice] += [e.id, e.nome]
      })
      res.status(200).jsonp(distritos)
    })
});

router.get("/api/ligacoes", (req, res, next) => {
  if(req.query['origem'] != undefined) {
    Ligacoes.listarLigacoesOrigem(req.query['origem'])
      .then(dados => {
        res.status(200).jsonp(dados)
      })
      .catch(error => {
        res.status(500)
          .jsonp({erro: error})
      })
  }
  else if(req.query['dist'] != undefined) {
    Ligacoes.listarLigacoesDistancia(req.query['dist'])
      .then(dados => {
        res.status(200).jsonp(dados)
      })
      .catch(error => {
        res.status(500)
          .jsonp({erro: error})
      })
  }
})

router.get("/api/cidades/nomes", (req, res, next) => {
  Cidades.consultarNomes(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(error => {
      res.status(500)
        .jsonp({erro: error})
    })
});

// keep at bottom
router.get("/api/cidades/:id", (req, res, next) => {
  Cidades.consultar(req.params.id)
    .then(dados => {
      res.status(200).jsonp(dados)
    })
    .catch(error => {
      res.status(500)
        .jsonp({erro: error})
    })
});

module.exports = router;
