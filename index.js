'use strict';
/*
  Requires the library files you will be writing (input, notes)
  Instantiates an “Input” parser
  Sends properly parsed input to the Notes library for display
*/
console.log('hello');

const Input = require('./lib/input');
const Notes = require('./lib/notes');


let parsedInput = new Input(process.argv.slice(2));
let parsedNotes = new Notes(parsedInput)
