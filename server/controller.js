'use strict';

const event = require('./calendar.js');

exports.get = function* () {
  this.body = yield event.getAll();
  };

exports.post = function* () {
  event.save(this.request.body);
  this.status = 200;
}
