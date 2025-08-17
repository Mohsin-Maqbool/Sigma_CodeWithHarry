// named export
// import {a, b, c, d, e} from "./mymodule.js"
// console.log(a,b,c,d,e)


// default export
// import mohsin from   "./mymodule.js"
// console.log(mohsin)


const a = require("./mymodule2")
console.log(a)



// CommonJS
// const { createServer } = require('node:http');
// const fs = require("fs");

// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
