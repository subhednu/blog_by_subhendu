var express = require('express');
var router = express.Router();
var db = require("../db");
var passport = require('passport');

/* GET users listing. */
//router.get('/', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    router.get('/', function(req, res, next) {
    res.json({name: "Watch"});
});

module.exports = router;