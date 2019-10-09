
const success = (resp) => {
  return {
    data: resp,
    success: true
  };
};

const error = (err) => {
  return {
    errors: err.errors,
    success: false
  };
};

module.exports = {
  success: success,
  error: error
};