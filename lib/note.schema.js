'use strict';
const mongoose = require('mongoose');
const DBURL = 'mongodb://localhost:27017/app';
const minimist = require('minimist');

const argsData = minimist(process.argv.slice(2));


mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });


const noteSchema = mongoose.Schema({
  note: { type: String, require: true },
  catagory: { type: Array }
})
const NoteModules = mongoose.model('notes', noteSchema);

const dataOrganizer = async () => {
  let printNotes = await NoteModules.find();
  printNotes.forEach(val => {
    console.log(val.note);
  })

  if (argsData.length > 0) {
    let newNote = new Notes({
      note: argsData[0],
    });

    try {
      let saveNote = await newNote.save();
      console.log(saveNote);
    } catch (e) { console.error(e) };

  }
  mongoose.disconnect();
}
dataOrganizer();





module.exports = NoteModules;