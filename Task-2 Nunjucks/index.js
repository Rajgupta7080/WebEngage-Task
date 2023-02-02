const nunjucks = require('nunjucks')
const AllData = require('./data.json')
const fs = require('fs')

nunjucks.configure({
  autoescape: true,
})
nunjucks.configure('views', {
  autoescape: true,
})

let result = nunjucks.render('hello.njk', AllData)
fs.writeFileSync('./index.html', result)
console.log('successfully rendered')
