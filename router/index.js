const express                = require('express');
const router                 = express.Router();
const middleware             = require('../middleware');
const UserRequestsController = require('../controller/UserRequestsController');

const userRequestsController = new UserRequestsController();

router.get('/echo', middleware.auth, userRequestsController.create);
router.get('/list', middleware.auth, userRequestsController.search);


module.exports = router;
