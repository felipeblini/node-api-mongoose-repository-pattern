/**
 * 
 * 
 * @param {any} the response object
 * @param {any} the http status to sen
 * @param {any} the json content
 */
function sendJsonResponse (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports = sendJsonResponse;