'use strict';

const router = require('koa-router')();
const http = require('http');
const bodyParser = require('koa-bodyparser');

const controller = require('./controller.js')

router.get('/events', controller.get)
router.post('/events', controller.post);

module.exports = router;
