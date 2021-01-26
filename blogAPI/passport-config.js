var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var authModel = require('./models/auth-model');
var jwtStrategy = require('passport-jwt').Strategy;
var extractJwt = require('passport-jwt').ExtractJwt;

var options = {};
options.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret123'

passport.use(new localStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done){
        authModel.findOne(username, function(err, result){
            if (err) return done(err);

            if (result.length === 0){
                return done(null, false, {message: 'Incorrect Username'})
            }

            const user = result[0];
            bcrypt.compare(password, user.password, function(err, result){
                if(! result){
                    return done(null, false, {message: 'Incorrect password'});
                }
                return done(null, user);
            })
        })
    }
))

passport.use(new jwtStrategy(options, function(jwtPayload, done,){
    authModel.findById(jwtPayload.sub, function(err, result){
        if(err){ return done(err, false)}

        if (result.length === 0){
            return done(null, false);
        }

        return done(null, result[0])

    })
}))