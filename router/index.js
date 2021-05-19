const express                = require('express');
const router                 = express.Router();


router.get('/echo', (request, response, next) => {
    console.log(request.ip);
    next()
}, (request, response, next) => {
    response.send('Fooo')
});


module.exports = router;
