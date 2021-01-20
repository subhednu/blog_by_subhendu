var express = require('express');
var router = express.Router();
var authModel = require("../models/auth-model");
var bcrypt = require('bcrypt');

router.post('/signup', function(req, res){
    const password = req.body.password;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash){
        req.body.password = hash;
        authModel.signup(req.body, function(err, result){
            res.json({data: result, error: err})
        })
    })
})


module.exports = router;