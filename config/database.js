module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'astore',
        connectTimeout: 90000,
        options: {
            encrypt: true,
            trustedConnection: true,
            enableArithAbort: true
        }
    },
    pool: {
        min: 2,
        max: 10
    }
})