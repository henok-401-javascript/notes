'use strict';
/*
  Exports a constructor function
  Compose a prototype method that can execute the correct (any) operation, given the above object
*/

function Notes(args) {
  if (args.valid()) this.execute(args.command);
  else console.error('error wrong input!! sent to notes.');
}
Notes.prototype.execute = function (command) {
  switch (command.action) {
    case 'add':
      this.add(command.playload);
      break;
    default:
      break;
  }
};
Notes.prototype.add = function (playload) {
  let id = Math.round(Math.random() * 1000);
  console.log('my first note to add');
  console.log(id + ':' + playload);
}



module.exports = Notes;