const fs = require('fs');
const http = require('http')
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    res.setHeader('content-Type', 'text/html');
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>About </h1> <p> About me!</p>');
    }
    else if(req.url == '/cwh'){
        res.statusCode = 200;
        res.end('<h1>Hey i am abhi akbari </h1> <p> You can contact me here!</p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not Found</h1> <p>This page is not found on server!</p>');
    }
})

server.listen(port,() => {
    console.log(`server is listening on port ${port}`);
});