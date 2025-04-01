const fs = require('fs')

let data = fs.readFileSync('text.txt')
let text = data.toString()
console.log(text)