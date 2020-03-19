'use strict';
// const Input = require('../lib/input.js');

// describe
// it
// expect

const input = require('../lib/input.js')

const badInputA = [];
const badInputB = ['WRONG'];
const badInputC = ['-b', 'WRONG'];
const badInputD = ['-a', ''];

// Good Input
const goodInput = ['-a', 'This is a note!'];

describe('the test will check those requirements', () => {
  it('will check empty value', () => {
    let result = new input(badInputA);
    expect(result.valid()).toBeFalsy();
  })
  it('will check wrong value', () => {
    let result = new input(badInputB);
    expect(result.valid()).toBeFalsy();
  })
  it('will check wrong flag and input', () => {
    let result = new input(badInputC);
    expect(result.valid()).toBeFalsy();
  })
  it('will check wrong flag and empty string', () => {
    let result = new input(badInputD);
    expect(result.valid()).toBeFalsy();
  })
})

describe('having the required value', () => {
  it('will check with the required value -a flag', () => {
    let result = new input(goodInput);

    expect(result.valid()).toBeTruthy();
  })
})



