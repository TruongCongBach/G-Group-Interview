class UserRequestsController {

    create(request, response) {
        response.status(200).send('111');
    }

    search(request, response) {
        response.status(200).send('1222');
    }
}

module.exports = UserRequestsController
