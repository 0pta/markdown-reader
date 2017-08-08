const chai = require('chai')
const assert = chai.assert
const markdown = require('../src/markdown.js')
const path = require('path')

const file1 =


let result = markdown.reader(file1)

describe('#reader', () => {
  let expected = '# Header'
  it('should print file', () => {
    assert.equal(result, expected)
  })
})
