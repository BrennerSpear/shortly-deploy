var mongoose = require('mongoose');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

mongoose.connect('mongodb://localhost/27017');

var db = mongoose.connection;
console.log('mongoose.connection...');

db.on('error', console.error.bind(console, 'connection error:'));

// var dbOnceSync = Promise.promisify(db.once);

// dbOnceSync('open').then(function() {
 
db.once('open', function() {

  console.log('We are conneceted to Mongo!');
});