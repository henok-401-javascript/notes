'use strict';
const minimist = require('minimist');
const Input = require('./input.js');
const mongoose = require('mongoose');
const DBURL = 'mongodb://localhost:27017/app';
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });


class Notes {
  constructor(command) {
    if (command && command.action) this.execute(command);
    else console.error('error wrong input!! sent to notes.');
  }
  execute(command) {
    switch (command.action) {
      case 'add':
        if (!command.playload) {
          return;
        }
        this.add(command.playload, command.category);
        break;
      case 'delete':
        if (!command.playload) {
          console.error('no notes')
        }
      default:
        break;
    }
  }
  async add(text, category) {
    try {
      let newNote = new Input({
        text: text,
        category: category ? category : ''
      });
      await newNote.save();
      mongoose.disconnect();
    } catch (e) { console.error(e) }
  }
  async list(category) {
    let allNotes = [];
    try {
      allNotes = await Input.find();
    } catch (e) { console.error(e) };
    allNotes.forEach(val => {
      if (category) {
        if (val.category === category) {
          console.log(val.text);
        } else {
          console.log(val.text);
        }
      }
    });
    mongoose.disconnect();
  };
  //  async delete(noteId){
  //  try{

  //  }
  // }
}

module.exports = Notes;


