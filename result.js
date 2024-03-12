const { Client } = require('pg');
const fs = require('fs');

// Read PostgreSQL password from file
const password = fs.readFileSync('./pg_password.txt', 'utf8').trim();

// PostgreSQL connection configuration
const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: password,
  port: 5432,
};

// Create a PostgreSQL client
const client = new Client(config);

// Connect to the PostgreSQL server
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');

    // Query data from the table
    const queryData = 'SELECT * FROM users';

    client.query(queryData, (err, result) => {
      if (err) {
        console.error('Error querying data', err);
      } else {
        console.log('Query result:', result.rows);
      }

      // Close the PostgreSQL connection
      client.end();
    });
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL', err);
  });

