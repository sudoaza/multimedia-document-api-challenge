const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  body: []
});

const componentTypes = [
  'video',
  'image',
  'text',
  'free-text',
  'multiple-choice'
];

DocumentSchema.path('body').validate(function(body){
  if (!body) { return false; }
  else if (body.length === 0) { return false; }

  return true;
}, 'Document body needs at least one component.');


DocumentSchema.path('body').validate(function(body){
  for (let i = 0; i < body.length; i++) {
    if (componentTypes.indexOf(body[i].type) == -1) {
      return false;
    }

    // @TODO Validate against appropriate component schema
  }

  return true;
}, 'Document body components need to be from allowed types and have required fields.');

module.exports = mongoose.model('Document', DocumentSchema);
