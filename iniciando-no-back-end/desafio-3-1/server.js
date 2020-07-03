const express = require('express')
const nujuncks = require(`nunjucks`)

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nujuncks.configure('views', {
  express: server
})

server.get('/', function(req, res) {
  return res.render('courses')
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.listen(3333, function() {
  console.log('Server is running')
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});
