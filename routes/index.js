var express = require('express');
var router = express.Router();
const userModel = require('../models/userModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello sire' });
});

router.get('/signin', function (req, res, next) {
    res.render('signin', { title: 'TeLl Me HoW yOu\'Re FeElInG' });
});

router.get('/signup', function (req, res, next) {
    res.render('signup', { title: 'Imagine not having an account' });
});

router.post('/authenticateUser', async function (req, res, next) {
    const yn = await userModel.findUser(req.body.email, req.body.password);
    if (yn != null) {
        res.end("gouda youda been done good");
    }
});

router.post('/registerUser', async function (req, res, next) {
    await userModel.insertUser(req.body.email, req.body.password);
});

/*
 * router.post('/authenticateUser', function(req, res, next) {
  //TODO your code starts here
  const db = req.con;
  user = req.body.user;
  password = req.body.password;
  sql = "SELECT * FROM Users WHERE User = '" + user + "'";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
      if (result.length != 0) {
          if (result[0].Password == password) {
              console.log("succedodededad");
              res.end('omega big brain monke dude, u are moar smort than monke');
          }
      }
      else {
        res.end('you have been banished to the land of the nerds. LOL')
      }
  });

});
*/

module.exports = router;
