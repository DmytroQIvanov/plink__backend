var express = require('express');
  const fs = require('fs');
  var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {



  fs.readFile('./goods.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
    res.send(student);

});
});

module.exports = router;
