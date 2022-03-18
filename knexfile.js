// Update with your config settings.



const mysql = require('mysql');


const localSQLConnection = {
    host: "pvnet-testing.cjdmtmc8kuwg.us.west.rds.amazonaws.com",
    port: "3306",
    user: "pvnetuser",
    password: "CDy21xM8c9NA",
    database: "SWE3"
};

localSQLConnection.knex.raw("SELECT 1").then(() => {
    console.log("connected :D");
})
    .catch((e) => {
        console.log("no connection :C");
        console.error(e);
    });

// Production database connection
const SQLConnection = localSQLConnection;

module.exports = {
  development: {
    client: 'mysql',
    connection: SQLConnection,
    migrations: {
      directory: './database/migrations',
      tablename: 'knex_migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
