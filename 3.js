const through = require('through2');

const write = (buffer, encoding, next) => {
  this.push(buffer.toString().toUpperCase());
  next();
};

const end = (done) => {
  done();
};

const stream = through(write, end);
