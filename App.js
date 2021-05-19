const express         = require('express');
const app             = express();
const { port }        = require('./config');
const router          = require('./router');
const Connection      = require('./config/DBConnection');
const UserRequestRepo = require('./app/UserRequestRepo');

app.set('userRequest.repo', new UserRequestRepo(Connection));

app.use(router);
app.listen(port, () => {
    console.log(`app listening at http://localhost:${ port }`);
});
