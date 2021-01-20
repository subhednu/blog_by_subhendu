var db = require('../db');


let model = {
    signup: (input, cb) => {
        let data = {
            username: input.username,
            password: input.password,
            email: input.email,
            first_name: input.first_name,
            last_name: input.last_name,
            is_active: 1
        };
        return db.query("INSERT INTO users SET ?", [data], cb);
    }
}

module.exports = model;