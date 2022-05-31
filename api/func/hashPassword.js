const CryptoJS = require('crypto-js');


module.exports = function (pass) {
    var hash = CryptoJS.SHA256(pass);
    return hash.toString(CryptoJS.enc.Hex);
};
