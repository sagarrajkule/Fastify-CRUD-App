# Fastify MongoDB CRUD API

Develop a Fastify REST API that utilizes MongoDB to perform CRUD operations on a Product schema. This API allows for efficient management of product data through Create, Read, Update, and Delete functionalities within the MongoDB database.

## Requirements

Before getting started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sagarrajkule/Fastify-CRUD-App.git
2.  Navigate to the project directory:
    ```bash
    cd fastify-mongodb-crud
3.  Install dependencies using Yarn or NPM:
    ```bash
    yarn install

    or 

    npm install

## MongoDB Configuration

1. Ensure you have a MongoDB server running

2. Update the MongoDB connection string in src/lib/db.js. [Replace 'mongodb://localhost:27017/fastifycrud' with your actual MongoDB connection string.]

## Setup Mongo using Docker

1. Install docker on you mac

2. Pull mongo image
   ```bash
   docker pull mongo

3. Pull mongo image
   ```bash
   docker run --name mongo -d -p 27017:27017 mongo

## Start the Fastify Server
Run the following command to start the Fastify server:

    yarn start

    or 

    npm start

## API Endpoints
    GET /api/products: Retrieve all products.
    GET /api/product/:id: Retrieve a specific product by ID.
    POST /api/product: Add a new product.
    PUT /api/product/:id: Update a product by ID.
    DELETE /api/product/:id: Delete a product by ID.

Adjust and expand the API routes in src/routes/index.js to meet your specific requirements.





