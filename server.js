const http = require('http');
const fs = require('fs')
const homePage = fs.readFileSync('./pages/home.html')
const aboutPage = fs.readFileSync('./pages/about.html')
const notFoundPage = fs.readFileSync('./pages/404.html') 

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end(aboutPage)
  } else if (req.url === "/") {
    res.end(homePage)
  } else {
    res.writeHead(404)
    res.end(notFoundPage)
  }
})

server.listen(3000)
