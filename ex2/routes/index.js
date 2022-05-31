var express = require('express');
var router = express.Router();
var axios = require('axios');

var tok = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxMzk1OCwiZXhwIjoxNjU0MDQyNzU4fQ.Y3QM7PTXTK5NKGW8IDDBQge6qTOmfDQam1z5a4zqanDhQRojCh_VN_LyWq83rWBHWZ6ViLG4XV3d8fBRM1kS3cnZySwES6i1n_ZK-MVWHMzWZpFZg3aR8TxXmhLLrhf8kvSYCdf2BNDBOhVgEf8BQs0PLKr3aOGsyipGMsI7Grwm_Crt8z-k2gw5ISubyeiIKFKbm8VxQAKwNAbAuG5rSWC7FHVYGzxTlVV7-Jw5OpDJt5OaND2P6K87NJDKH9pRGP3IYzK4xXaDkoeE3aWUykeRZOjTsEopg8viXLf-KDgEgKYEytOfY_-70TfWsti84hX3-B3GZIijLeDtvJy7Sg"

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teste' });
});

router.get('/classes', function(req, res, next) {
  axios.get("http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=" + tok)
    .then(resp => {
      var dados = resp.data;
      res.render('classes', { classes: dados , title: "Classes"});
    })
    .catch(error => {
      res.render('error', { error: error });
    }); 
})

router.get('/termosIndice', function(req, res, next) {
  
})


module.exports = router;
