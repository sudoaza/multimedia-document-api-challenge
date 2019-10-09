const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const http = require('http');
const app = express();
const YAML = require('yamljs');

var swaggerUi = require('swagger-ui-express');

const OpenApiValidator = require('express-openapi-validator').OpenApiValidator;
const DocumentController = require('./app/controllers/document');
const ApiResponse = require('./app/models/api_response');

var mongoose = require('mongoose');
mongoose.connect('mongodb://root:password@database:27017/docapi?authSource=admin');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

new OpenApiValidator({
  apiSpec: './config/api-spec.yml'
}).install(app);

const swaggerDocument = YAML.load('./config/api-spec.yml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/v1/documents', DocumentController.index);
app.get('/v1/documents/:id', DocumentController.show);
app.post('/v1/documents', DocumentController.create);

app.use((err, req, res, next) => {
  res.status(err.status).json(
    ApiResponse.error(err)
  );
});

const server = http.createServer(app);
server.listen(3000);
console.log('Listening on port 3000');

module.exports = app;