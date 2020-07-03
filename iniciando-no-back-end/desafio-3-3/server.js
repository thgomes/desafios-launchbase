const express = require('express')
const nujuncks = require(`nunjucks`)

const server = express()
const courses = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nujuncks.configure('views', {
  express: server
})

server.get('/', function(req, res) {
  return res.render('layout')
}) 

server.get('/courses', function(req, res) {
  return res.render('courses', { courses })
})

server.get('/courses/:id', function(req, res) {
  const id = req.params.id;

  const course = courses.find(function(course) {
    if (course.id == id) {
      return true
    }
  })

  return res.render('courses', { courses })
})

server.get('/about', function(req, res) {
  const data = {
    name: 'Rocketseat',
    image_url: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
    description: 'Somos uma comunidade incrível de programadores em busca do próximo nível, usando as melhores tecnologias do mercado. Confira nossa stack:',
    stack: ['Javascript', 'Node.js', 'React.js', 'React Native'],
    medias: [
      {
        name: 'Github',
        url: 'https://github.com/Rocketseat',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rocketseat_oficial/',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rocketseat',
      }
    ]
  }

  return res.render('about', { about: data })
})

server.listen(3333, function() {
  console.log('Server is running')
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});
