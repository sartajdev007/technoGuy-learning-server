const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/categories.json');
const { request } = require('express');
const courses = require('./data/courses.json')
const instructors = require('./data/instructors.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api running')
})

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const category_courses = courses.filter(n => n.category_id === id)
    res.send(category_courses)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(n => n.id === id)
    res.send(selectedCourse)
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courses.find(n => n.id === id)
    res.send(selectedCourse)
})

app.get('/instructors', (req, res) => {
    res.send(instructors)
})

app.listen(port, () => {
    console.log('server running', port)
})