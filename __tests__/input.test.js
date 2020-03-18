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
    let result = badInputA;
    expect(result).toFalsy();
  })
  it('will check wrong value', () => {
    expect()
  })
  it('will check wrong flag and input', () => {
    expect()
  })
  it('will check wrong flag and empty string', () => {
    expect()
  })
})

describe('having the required value', () => {
  it('will will check with the required value', () => {
    expect()
  })
})



