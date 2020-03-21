'use strict';
const Validator = require('../lib/validator.js');


const schema = {
  id: { type: 'number', require: true },
  note: { tyoe: 'string', require: true }
}

const validator = new Validator(schema);

describe('validator of my booleans', () => {
  it('number', () => {
    expect(validator.isNumber(str)).toBeFalsy();
    expect(validator.isNumber(num)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  })
})