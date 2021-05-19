class UserRequest {

    /**
     *
     * @param ip {string}
     * @param data {string}
     */
    constructor(ip, data) {
        this.ip = ip;
        this.data = data;
    }

    /**
     *
     * @returns {string}
     */
    getIp() {
        return this.ip;
    }

    /**
     *
     * @returns {number}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param id {number}
     */

    setId(id) {
       this.id = id;
    }

    /**
     *
     * @returns {string}
     */
    getData() {
        return this.data;
    }

    /**
     *
     * @param ip {string}
     */
    setIp(ip) {
        this.ip = ip;
    }


    /**
     *
     * @param data {string}
     */
    setData(data) {
        this.data = data;

    }
}

module.exports = UserRequest
