require('dotenv').config();
const PORT              = process.env.PORT_SERVER;

const HOST_DATABASE     = process.env.HOST_DATABASE;
const DATABASE_USER     = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME     = process.env.DATABASE_NAME;
const DATABASE_TYPE     = process.env.DATABASE_TYPE;

const TOKEN             = process.env.TOKEN;

module.exports = {
    port    : PORT,
    token   : TOKEN,
    database: {
        client    : DATABASE_TYPE,
        connection: {
            host    : HOST_DATABASE,
            user    : DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_NAME,
        },
    },
};
