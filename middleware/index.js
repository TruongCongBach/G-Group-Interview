const { token } = require('../config');
const UserRequest = require('../app/UserRequest');

function auth(request, response, next) {
    const ip = request.ip;
    const data = request.query.data;

    if (request.headers.authorization !== token) {
        return response.sendStatus(400);
    }

    request.userReq = new UserRequest(ip, data)
    next();
}

module.exports = {
    auth,
};
