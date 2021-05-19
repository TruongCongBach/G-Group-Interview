const { token } = require('../config');

function auth(request, response, next) {

    if (request.headers.authorization !== token) {
        response.sendStatus(400);
    }

    next();
}

module.exports = {
    auth,
};
