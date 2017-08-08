const chai = require('chai')
const assert = chai.assert
const markdown = require('../src/markdown.js')
const path = require('path')

const file1 = path.join(__dirname, 'fixtures/file1.md')

let readerRes = markdown.reader(file1)
let h1ConvertRes = markdown.convertToHTML(file1)

describe('#reader', () => {

  it('should print file', () => {
    let expected = '# Header'
    assert.equal(readerRes, expected)
  })

  it('should convert ""# Header" to h1 HTML tags', () => {
    let expected = '<h1>Header</h1>'
    assert.equal(h1ConvertRes, expected)
  })

})
