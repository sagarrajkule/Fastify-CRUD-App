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
    ```

## MongoDB Configuration

1. Ensure you have a MongoDB server running

2. Update the MongoDB connection string in src/lib/db.js. [Replace 'mongodb://localhost:27017/fastifycrud' with your actual MongoDB connection string.]

## To set up the latest MongoDB image using Docker and run a container, follow these steps:

1. Install Docker
   If you don't have Docker installed, download and install it from the official Docker website. 

2. Pull the MongoDB Image
   Open a terminal or command prompt.
   Run the below command to download the official MongoDB image from Docker Hub. This command pulls the latest version by default. 
   ```bash
   docker pull mongo
   ```

3. Create a Docker Container
   Run the following command to create and start a MongoDB container:
   ```bash
   docker run -d -p 27017:27017 --name mymongodb mongo
   ```

    -d: Runs the container in detached mode (in the background). 

    -p 27017:27017: Maps port 27017 on your host machine to port 27017 within the container. MongoDB's default port is 27017. 

    --name mymongodb: Assigns the name "mymongodb" to the container. 

    mongo: Specifies the MongoDB image to use. 

## Start the Fastify Server
Run the following command to start the Fastify server:
    ```
    yarn start
    or 
    npm start
    ```

## API Endpoints
    GET /api/products: Retrieve all products.
    GET /api/product/:id: Retrieve a specific product by ID.
    POST /api/product: Add a new product.
    PUT /api/product/:id: Update a product by ID.
    DELETE /api/product/:id: Delete a product by ID.

Adjust and expand the API routes in src/routes/index.js to meet your specific requirements.





