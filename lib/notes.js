'use strict';


class Notes {
  constructor(args) {
    if (args.valid()) this.execute(args.command);
    else console.error('error wrong input!! sent to notes.');
  }
  execute(command) {
    switch (command.action) {
      case 'add':
        this.add(command.playload);
        break;
      default:
        break;
    }
  }
  add(playload) {
    let id = Math.round(Math.random() * 1000);
    console.log('my first note to add');
    console.log(id + ':' + playload);
  }
  valid() {
    const schema = {
      id: { type: 'string', require: true },
      text: { type: 'string', require: false }
    }
    const validate = new Validator(schema);
    return validate.isValid(this);
  }
}


module.exports = Notes;