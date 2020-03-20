'use strict';

const minimist = require('minimist');

class Input {
  constructor(args) {
    let formatted = minimist(args);
    this.command = {};
    let formattedKey = Object.keys(formatted);

    for (let i = 0; i < formattedKey.length; i++) {
      let key = formattedKey[i];
      let val = formatted[key];
      switch (key) {
        case 'a':
        case 'add':
          this.command = { action: "add", playload: val };
          return;
        default:
          break;
      }
    }
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
  }
}

// function Input(args) {

//   let formatted = minimist(args);
//   this.command = {};
//   let formattedKey = Object.keys(formatted);

//   for (let i = 0; i < formattedKey.length; i++) {
//     let key = formattedKey[i];
//     let val = formatted[key];
//     switch (key) {
//       case 'a':
//       case 'add':
//         this.command = { action: "add", playload: val };
//         return;
//       default:
//         break;
//     }
//   }
// }


// Input.prototype.valid = function () {

//   if (!this.command) return false;
//   if (!this.command.action) return false;
//   switch (this.command.action) {
//     case 'add':
//       return typeof this.command.playload === 'string';
//     default:
//       break;

//   }

// };






module.exports = Input;