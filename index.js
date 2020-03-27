'use strict';

const mongoose = require('mongoose');
const Input = require('./lib/input');
const NotesHandler = require('./lib/notes');

const DBURL = 'mongodb://localhost:27017/app';
// const minimist = require('minimist');
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });


let args = process.argv.slice(2);

let myInput = new Input(args);

let NoteDB = new NotesHandler(myInput.command);
// mongoose.disconnect();



// let parsedInput = new Input(process.argv.slice(2));
// let parsedNotes = new Notes(parsedInput);

