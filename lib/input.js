'use strict';

const minimist = require('minimist');
const Validator = require('./validator.js');
const NoteModules = require('./note.schema.js');
const NewCatagory = require('./category.schema.js');


class Input {
  constructor(args) {
    let formatted = minimist(args);
    this.command = {};
    let formattedKey = Object.keys(formatted);

    // for (let i = 0; i < formattedKey.length; i++) {
    // let key = formattedKey[i];
    // let val = formatted[key];
    formattedKey.forEach(value => {

      switch (value) {
        case 'a':
        case 'add':
          this.command = { action: "add", playload: formattedKey[value], category: false };
          // return;
          // default:
          break;
        case 'c':
        case 'category':
          this.command.category = typeof formattedKey[value] === 'string' ? formattedKey[value] : false;
          break;
        case 'l':
        case 'list':
          this.command = {
            action: 'list',
            playload: typeof value === 'string' ? value : false
          };
          break;
        case 'd':
        case 'delete':
          this.command = {
            action: 'delete',
            playload: typeof formattedKey[value] === 'string' ? formattedKey[value] : false,
          };
          break;
        // default:
        // break;
      }
    });
  }


  valid() {
    if (!this.command) return false;
    if (!this.command.action) return false;
    switch (this.command.action) {
      case 'add':
        return typeof this.command.playload === 'string';
      default:
        break;
    }
    const schema = {
      action: { type: 'string', required: true },
      playload: { type: 'string', required: true }

    }
    const validate = new Validator(schema);
    return validate.isValid(this.command);
  };
};



module.exports = Input;