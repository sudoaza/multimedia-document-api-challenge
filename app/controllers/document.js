const Document = require('../models/document');
const Errors = require('../models/errors');
const ApiResponse = require('../models/api_response');

const index = (req, res, next) => {
  Document.find(function(err, docs) {
    res.json(ApiResponse.success(docs));
  });
}

const show = (req, res, next) => {
  Document.findById(req.params.id, function(err, doc) {
    if (!doc) {
      return next(Errors.notFound());
    }
    res.json(ApiResponse.success(doc));
  });
}

const create = (req, res, next) => {
  const doc = new Document(req.body);
  doc.save(err => {
    res.json(ApiResponse.success(doc));
  });
}

module.exports = {
  "index": index,
  "show": show,
  "create": create
}
