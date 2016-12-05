/**
 * Send json response with the given status code
 * 
 * @param {object} the response object
 * @param {number} the http status to send
 * @param {object} the json content
 */
function sendJsonResponse (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports = sendJsonResponse;