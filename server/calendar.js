'use strict';

const mongodb = require('mongodb');
const mongoose = require('mongoose');

// import eventSchema from './calendarSchema';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/calendar');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function () {
  console.log('Moogose connected!');
});

const eventSchema = mongoose.Schema({
  title: {type: String, required: true},
  date: {type: String, required: true},
  venue: {type: String, required: true},
});

const Event = mongoose.model('Event', eventSchema);

exports.getAll = function () {
  console.log('GET called');
  return Event.find();
};

exports.save = function (event) {
  console.log('POST called');
  let newEvent = new Event(event);
  newEvent.save(function (err) {
    if (err) return handleError(err);
    console.log('New event saved!');
  });
};
