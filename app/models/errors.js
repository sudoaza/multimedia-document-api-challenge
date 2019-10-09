class Error {
  constructor(status=500, message='Something went wrong') {
    this.status = status;
    this.message = message;
    this.errors = [{"message": message, "errorCode": status}];
  }
}

const notFound = (message = 'Not Found') => {
  return new Error(404, message);
};

module.exports = {
  notFound: notFound
};