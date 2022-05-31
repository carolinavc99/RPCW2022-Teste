var express = require('express');
var router = express.Router();

/* GET users listing. */
// esta rota é concatenada à anterior
router.get('/', function(req, res, next) {
  // A função a correr quando chega um pedido à rota
  res.send('respond with a resource');
});

module.exports = router;
