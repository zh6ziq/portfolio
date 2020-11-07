//require express
const express = require('express')

const app = express()
const env = require('dotenv').config()
var port = process.env.PORT || 3000


//serving static files
app.use(express.static('public'))

app.set('view engine', 'ejs')


//callback home.html page
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})