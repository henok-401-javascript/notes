'use strict';
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  note: { type: String, require: true },
  catagory: { type: Array }
})

const NoteModules = mongoose.model('notes', noteSchema);



module.exports = NoteModules;