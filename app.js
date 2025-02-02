const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.sendFile('./index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
//   res.send('Hello World! About Page')
res.sendFile('./about.html', {root: __dirname})
});

app.get('/product/:id', (req, res) => {
    res.send('Product ID : ' + req.params.id)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})