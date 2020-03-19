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
  // console.log('this is minimist', formatted);
  // this.command = {action:"" , playload:""}
  let formattedKey = Object.keys(formatted)
  // console.log('key of formatted', formattedKey);
  let value = Object.values(formatted)
  // console.log('value of formatted', value);

  for (let i = 0; i < formattedKey.length; i++) {
    let key = formattedKey[i];
    let val = Object.values(formatted);
    console.log('key', key, 'value', val);
  }
  this.command = {};

}
Input.prototype.valid = function () {

}






module.exports = Input;