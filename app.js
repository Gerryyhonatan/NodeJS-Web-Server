const express = require('express')
const app = express()
const port = 3000

// gunakan ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Sandhika',
            email: 'sandhika@gmail.com'
        },
        {
            nama: 'Sand',
            email: 'sand@gmail.com'
        },
        {
            nama: 'Dhika',
            email: 'dhika@gmail.com'
        },
    ]
    res.render('index', { nama: 'Sandhika', title: 'Home', mahasiswa: mahasiswa})
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/product/:id', (req, res) => {
    res.send('Product ID : ' + req.params.id)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})