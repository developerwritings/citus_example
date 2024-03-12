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

    // Create a table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL
      );
    `;

    client.query(createTableQuery, (err, result) => {
      if (err) {
        console.error('Error creating table', err);
      } else {
        console.log('Table created successfully');

        // Insert data into the table
        const insertDataQuery = `
          INSERT INTO users (username, email)
          VALUES ('john_doe', 'john@example.com'),
                 ('jane_doe', 'jane@example.com');
        `;

        client.query(insertDataQuery, (err, result) => {
          if (err) {
            console.error('Error inserting data', err);
          } else {
            console.log('Data inserted successfully');
          }

          // Close the PostgreSQL connection
          client.end();
        });
      }
    });
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL', err);
  });

