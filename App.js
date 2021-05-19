const express         = require('express');
const app             = express();
const { port }        = require('./config');
const router          = require('./router');


app.use(router);
app.listen(port, () => {
    console.log(`app listening at http://localhost:${ port }`);
});
