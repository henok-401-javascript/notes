'use strict';
const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  text: { type: String, require: true },
  category: { type: String }
})

const NoteModules = mongoose.model('notes', noteSchema);



module.exports = NoteModules;