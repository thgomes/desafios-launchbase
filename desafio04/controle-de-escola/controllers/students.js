const fs = require('fs')
const data = require('../data.json')
const { age, date, graduation, classType } = require('../utils')

exports.index = function(req, res) {
  return res.render('students/index', { students: data.students })
}

exports.show = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })

  if (!foundStudent) {
    return res.send('Student not found!')
  }

  const student = {
    ...foundStudent,
    age: age(foundStudent.birth),
  }

  return res.render('students/show', { student })
}

exports.create = function(req, res) {
  return res.render('students/create')
}

exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Please, fill all fields!')
    }
  }

  let { avatar_url, name, email, grade, time_load, birth } = req.body


  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.students.length + 1)


  data.students.push({
    id,
    name,
    email,
    grade,
    time_load,
    avatar_url,
    birth,
    created_at,
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Write file error')

    return res.redirect('/students')
  })
}

exports.edit = function(req, res) {
  const { id } = req.params
  
  const foundStudent = data.students.find(function(student) {
    return student.id == id
  })

  if (!foundStudent) {
    return res.send('Student not found!')
  }

  const student = {
    ...foundStudent,
    birth:
      date(foundStudent.birth).year + '-' +
      date(foundStudent.birth).month + '-' +
      date(foundStudent.birth).day
  }

  return res.render('students/edit', { student })
}

exports.put = function(req, res) {
 const { id } = req.body
 let index = 0

 const foundStudent = data.students.find(function(student, foundIndex) {
   if (id == student.id) {
     index = foundIndex
     return true
   }
 })

 if (!foundStudent) return res.send('Student not found!')

 const student = {
   ...foundStudent,
   ...req.body,
   id: Number(req.body.id)
 }

 data.students[index] = student

 fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
   if (err) {
     return res.send('Write error!')
   }

   return res.redirect(`/students/${id}`)
 })
}

exports.delete = function(req, res) {
  const { id } = req.body

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id
  })

  data.students = filteredStudents

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) {
      return res.send('Write file error!')
    }

    return res.redirect('/students')
  })
}
