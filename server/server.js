'use strict';

const app = require('koa')();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

const http = require('http');
const path = require('path');

const message = require('./calendar.js');
const router = require('./router.js');

app.use(cors());

app.use(bodyParser());

app.use(router.routes());

app.use(function* (next) {
  if (this.status === 404) this.body = '<h1>Sorry this URL does not exist</h1>';
  yield next;
});

app.use(router.allowedMethods());

app.listen(3000, function() {
console.log('Koa server listening on 3000...');
});
