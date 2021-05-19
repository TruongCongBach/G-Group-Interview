class UserRequestsController {

    create(request, response) {
        let repo = request.app.get('userRequest.repo');
        repo.create(request.userReq).then(([userReq]) => {
            request.userReq.setId(userReq);
            response.status(200).send(request.userReq);
        }).catch((err) => {
            console.log(err);
            //todo handle err
        });
    }

    search(request, response) {
        let repo = request.app.get('userRequest.repo');
        repo.search(request).then(result => {
            response.status(200).send(result);
        }).catch(() => {
            //todo
        });
    }
}
module.exports = UserRequestsController
