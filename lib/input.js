'use strict';

const minimist = require('minimist');
const NoteModules = require('./note.schema.js');
const mongoose = require('mongoose');
// const NewCatagory = require('./category.schema.js');


class Input {
  constructor(args) {
    this.command = {};
    let formatted = minimist(args);
    let keys = Object.keys(formatted);
    keys.forEach(val => {
      switch (val) {
        case 'a':
        case 'add':
          this.command = {
            action: 'add',
            playload: formatted[val],
            category: false,
          };
          // return;
          // default:
          break;
        case 'c':
        case 'category':
          console.log('formatted value ', formatted[val]);
          this.command.category = typeof formatted[val] === 'string' ? formatted[val] : false;
          break;
        case 'l':
        case 'list':
          this.command = {
            action: 'list',
            playload: typeof formatted[val] === 'string' ? formatted[val] : false,
          };
          break;
        case 'd':
        case 'delete':
          this.command = {
            action: 'delete',
            playload: typeof formatted[val] === 'string' ? formatted[val] : false,
          };
          break;
        default:
          break;


      }
    });


  }




  // parse(args) {
  //   let argsMap = { a: 'add' };
  //   let command = Object.keys(args).filter(arg => argsMap[arg])[0];
  //   let action = argsMap[command];
  //   let category = args.c || args.category;
  //   let playload = typeof args[command] === 'string' ? args[command] : undefined;
  //   return { category, action, playload };
  // }

};
// valid() {
//   if (!this.command) return false;
//   if (!this.command.action) return false;
//   switch (this.command.action) {
//     case 'add':
//       return typeof this.command.playload === 'string';
//     default:
//       break;
//   }
//   const schema = {
//     action: { type: 'string', required: true },
//     playload: { type: 'string', required: true }

//   }
//   const validate = new Validator(schema);
//   return validate.isValid(this.command);
// };




module.exports = Input;