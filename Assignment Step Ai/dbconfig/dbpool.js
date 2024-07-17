const { Pool } = require('pg');

const pool = new Pool({
    user: `vinod`,
    host: `localhost`,
    database: `assignment`,
    password: `vinod`,
    port: 5432,
});

module.exports = pool;