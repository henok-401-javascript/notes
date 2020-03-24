'use strict';
const mongoose = require('mongoose');





const CategoriesSchema = mongoose.Schema({
  name: { type: String, require: true }
});
let NewCatagory = mongoose.model('categories', CategoriesSchema);


const catagoryData = async () => {
  let resulCatagory = await NewCatagory.findOne({ name: 'deadline' });
  // let printNotes = await NoteModules.find();
  let importCategoryId = resulCatagory._id;
  console.log(importCategoryId);
  // catagory.forEach(val => {
  //   if (val.catagory && val.catagory.length)
  //     return val.catagory.includes(importCategoryId);

  //   console.log(val);
  // })

}
catagoryData();



module.exports = NewCatagory;