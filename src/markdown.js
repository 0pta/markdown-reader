const fs = require('fs')

module.exports = {

  reader: function(file) {
    let content = (fs.readFileSync(file, 'utf8')).trim()
    return content
  },

  convertToHTML: function(file) {
    let string = this.reader(file)
    console.log(string);
    return '<h1>Header</h1>'
  }


}
