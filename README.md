Created a small nodejs API as a challenge for a job posting. Hopefully future offerers will check this and other of my repos and not ask for further challenges ;)

# Problem

Create an API documented in Swagger that allows for the creation of documents composed of different multimedia components.

# Implementation

Created an Express API with OpenAPI 3.0 documentation. Request validation is done based on the API schema. Document components are stored as subdocuments in MongoDB.

# Running

A docker-compose.yml is provided, to run the app simply run:

    docker-compose up --build

Server should become available at http://localhost:3000


## API Docs

Check OpenAPI documentation at http://localhost:3000/api-docs
