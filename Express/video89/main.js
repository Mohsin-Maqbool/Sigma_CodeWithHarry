const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')

// ...

app.use('/blog', blog)
app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey its a Get request")
    res.send('Hello Mohsin')
})

.post('/', (req, res) => {
    console.log("Hey its a POST request")
    res.send('Hello World! post')
})


.put('/', (req, res) => {
    console.log("Hey its a Put request")
    res.send('Hello World! Put')
})

.delete('/', (req, res) => {
    console.log("Hey its a Delete request")
    res.send('Hello World! Delete')
})
app.get('/index', (req, res) => {
    console.log("Hey its a index.html")
    res.sendFile('templates/index.html', {root: __dirname})
})


app.get('/api', (req, res) => {
   res.json({ a : 1, b : 2, c : 3, d : 4, name : ["mohsin", "maqbool"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
