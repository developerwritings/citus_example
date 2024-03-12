# Citus Dockerized Setup with Node.js

This example demonstrates setting up a Citus distributed PostgreSQL database using Docker containers. Additionally, it includes a Node.js application for connecting to the database and performing basic operations.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/)
- `npm` (Node.js package manager)

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/citus-docker-nodejs-example.git
    cd citus-docker-nodejs-example
    ```

2. Build the Docker image and start the containers:

    ```bash
    docker-compose up -d
    ```

   This will start the Citus master and worker nodes along with PostgreSQL and expose port 5432.

3. Install Node.js dependencies:

    ```bash
    npm install
    ```

## Running the Node.js Application

1. Create the `pg_password.txt` file with your PostgreSQL password:

    ```bash
    echo "mypass" > pg_password.txt
    ```

   Replace "mypass" with your desired PostgreSQL password.

2. Run the Node.js application to create a table and insert data:

    ```bash
    node app.js
    ```

3. Run the Node.js application to query data:

    ```bash
    node query.js
    ```

   This will connect to the PostgreSQL Docker container and execute queries.

## Additional Notes

- The `app.js` file demonstrates creating a table and inserting data into the PostgreSQL database.

- The `query.js` file queries data from the PostgreSQL database.

- To connect to the Citus master or worker containers directly, you can use:

    ```bash
    docker exec -it citus_master bash
    ```

    or

    ```bash
    docker exec -it citus_worker bash
    ```

## Cleanup

To stop and remove the Docker containers, run:

```bash
docker-compose down

