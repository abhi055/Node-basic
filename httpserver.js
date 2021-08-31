const http = require('http')
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end('<h1>Hey i am abhi akbari </h1> <p> You can contact me here!</p>');
})

server.listen(port,() => {
    console.log(`server is listening on port ${port}`);
});