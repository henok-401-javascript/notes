'use strict';
const mongoose = require('mongoose');
// mongoose exports a class Schema
// We are passing our "schema" object as a parameter
// to the Schema constructor
// This should return an instance of mongoose.Schema

const mongooseSchema = new Schema({
  note: { type: "string", require: true }
})