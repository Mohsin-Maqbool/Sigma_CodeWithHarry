// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello This is HTML</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req,res)=>{
  res.send('Hello About Us!')
})

app.get('/contact', (req,res)=>{
  res.send('Contact me Here!')
})

app.get('/blog', (req, res)=>{
  res.send('Blog page')
})

app.get('/blog/intro-to-js', (req, res) => {
    // logic to fetch intro to js from the db
    res.send('Hello intro-to-js!')
})

app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro to python from the db
    res.send('Hello intro-to-python!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
