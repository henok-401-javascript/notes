'use strict';
const mongoose = require('mongoose');




const CategoriesSchema = mongoose.Schema({
  name: { type: String, require: true }
});
let NewCatagory = mongoose.model('categories', CategoriesSchema);



module.exports = NewCatagory;