'use strict';
// const minimist = require('minimist');
// const Input = require('./input.js');
const mongoose = require('mongoose');
const NoteModules = require('./note.schema.js');
// const DBURL = 'mongodb://localhost:27017/app';
// mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });


class NotesHandler {
  constructor(command) {
    if (command && command.action) this.execute(command);
    else console.error('error wrong input!! sent to notes.');
  }
  execute(command) {
    switch (command.action) {
      case 'add':
        if (!command.playload) {
          console.error('missing payload');
          return;
        }
        this.add(command.playload, command.category);
        break;
      case 'list':
        this.list(command.playload);
        break;
      case 'delete':
        if (!command.playload) {
          console.error('no notes');
          return;
        }
        this.delete(command.playload);
        break;
      default:
        break;
    }
  }
  async add(noteText, category) {
    console.log('this is add console', noteText, category);
    try {
      let newNote = new NoteModules({
        text: noteText,
        category: category ? category : '',
      });
      await newNote.save();
      mongoose.disconnect();
    } catch (e) { console.error(e) }
  }
  async list(category) {
    let allNotes = [];
    try {
      allNotes = await NoteModules.find();
    } catch (e) { console.error(e) };
    allNotes.forEach(val => {
      console.log(val.text);
      if (category) {
        if (val.category === category) {
          console.log(val.text);
        } else {
          console.log(val.text);
        }
      }
    });
    mongoose.disconnect();
  }


  //  async delete(noteId){
  //  try{

  //  }
  // }
}

module.exports = NotesHandler;


