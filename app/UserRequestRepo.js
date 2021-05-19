const Connection = require('../config/DBConnection')
const UserRequest = require('../app/UserRequest')

class UserRequestRepo {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection
    }

    /**
     *
     * @param {UserRequest} userRequest
     * @return {Promise <void>}
     */
    create(userRequest) {
        return this.connection.knex('user_requests').insert({
            ip: userRequest.getIp(),
            data: userRequest.getData()
        })
    }

    /**
     *
     * @returns {Promise <void>}
     */
    search() {
        return this.connection.knex('user_requests')
            .select('user_requests.id', 'user_requests.ip', 'user_requests.data')
    }
}

module.exports = UserRequestRepo
