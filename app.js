require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

// Settings

const app = express();
const port = process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Erick Villatoro',
        titulo: 'Curso Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Erick Villatoro',
        titulo: 'Curso Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Erick Villatoro',
        titulo: 'Curso Node'
    });
})

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', (req, res) => {
    res.render('404');
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})