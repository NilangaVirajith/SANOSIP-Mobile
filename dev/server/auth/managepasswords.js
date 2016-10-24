var bcrypt = require('bcryptjs');

module.exports.encryptPassword = function (password, callback) {
    bcrypt.genSaltSync(10, function (err, salt) {
        if (err) {
            return callback(err);
        }
        bcrypt.hashSync(password, salt, function (err, hash) {
            return callback(err, hash);
        })
    });
};

module.exports.comparePasswords = function (password, userPassword, callback) {
    bcrypt.compareSync(password, userPassword, function (err, isPasswordMatch) {
        if (err) {
            return callback(err);
        }
        return callback(null, isPasswordMatch);
    });
};