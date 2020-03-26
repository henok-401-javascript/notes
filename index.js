'use strict';

const mongoose = require('mongoose');
const NoteModules = require('./lib/note.schema.js');
// const NewCatagory = require('./lib/category.schema.js');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

const DBURL = 'mongodb://localhost:27017/app';
const minimist = require('minimist');
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.disconnect();

let args = process.argv.slice(2);

let myInput = new Input(Input);
let NoteDB = new Notes(myInput.command);



let parsedInput = new Input(process.argv.slice(2));
let parsedNotes = new Notes(parsedInput);

