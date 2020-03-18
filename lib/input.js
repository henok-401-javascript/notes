'use strict';
/*
   Exports a constructor function
  Uses minimist (or any other CLI library) to read command line arguments
  Evaluates and Validates the input (is the command (i.e. ‘-a’) a valid one and is there data)
  Returns an instance containing the action to perform and the payload for the action

*/
const minimist = require('minimist');

function Input(args) {
  let formatted = minimist(args);
  console.log(formatted);

  this.command = {};


}






module.exports = Input;