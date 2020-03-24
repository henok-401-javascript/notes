'use strict';
/*
  Requires the library files you will be writing (input, notes)
  Instantiates an “Input” parser
  Sends properly parsed input to the Notes library for display
*/
const mongoose = require('mongoose');
const NoteModules = require('./lib/note.schema.js');
const NewCatagory = require('./lib/category.schema.js');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const DBURL = 'mongodb://localhost:27017/app';
const minimist = require('minimist');
const argsData = process.argv.slice(2);
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });


let parsedInput = new Input(process.argv.slice(2));
let parsedNotes = new Notes(parsedInput);

///////NOTES SCHENA MONGODBA/////

const dataOrganizer = async () => {
  let printNotes = await NoteModules.find();
  printNotes.forEach(val => {
    // console.log(val.note);
  })

  if (argsData.length > 0) {
    let newNote = new NoteModules({
      note: argsData[0],
    });

    try {
      let saveNote = await newNote.save();
      // console.log(saveNote);
    } catch (e) { console.error(e) };

  }

  let resulCatagory = await NewCatagory.findOne({ name: 'deadline' });
  // console.log(resulCatagory);


  let importCategoryId = resulCatagory._id;
  let printNotesDb = await NoteModules.find();
  // console.log(printNotesDb);
  let matchValue = printNotes.filter(val => {
    // console.log(val);
    if (val.catagory && val.catagory.length)
      return val.catagory.includes(importCategoryId);


  })
  console.log('this is match', matchValue);

  mongoose.disconnect();
}

dataOrganizer();

/////////////CATEGORY SCHEMA MONGODBA//////



// const catagoryData = async () => {
//   let resulCatagory = await NewCatagory.findOne({ name: 'deadline' });
//   console.log(resulCatagory);

//   let importCategoryId = resulCatagory._id;
//   let printNotes = await NoteModules.find();
//   console.log(printNotes);
//   let matchValue = printNotes.filter(val => {
//     console.log(val);
//     if (val.catagory && val.catagory.length)
//       return val.catagory.includes(importCategoryId);


//   })
//   console.log('this is match', matchValue);


// } 

