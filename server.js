const express = require('express')




const app = express()
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', function (req, res) {
    res.render('index')
})


app.get('/nosotros', function (req, res) {
    res.render('nosotros')
})
app.get('/servicios', function (req, res) {
    res.render('servicios')
})
app.get('/catalogo', function (req, res) {
    res.render('catalogo')
})
app.get('/contactanos', function (req, res) {
    res.render('contactanos')
})


app.listen(3000);
console.log('puerto 3000');