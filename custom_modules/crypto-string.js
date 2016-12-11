const md5 = require('MD5');

/**
 * 
 * 
 * @param {any} stringToCrypto
 */
module.exports = function(stringToCrypto) {
    return md5(stringToCrypto + global.SALT_KEY);
};
