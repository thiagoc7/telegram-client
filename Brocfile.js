/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js');
app.import('bower_components/bootstrap-datepicker/css/datepicker3.css');

module.exports = app.toTree();
