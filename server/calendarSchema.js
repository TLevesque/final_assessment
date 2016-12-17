'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calendar');

const eventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    date: {type: String, required: true},
    venue: {type: String, required: true},
});

export default eventSchema;
