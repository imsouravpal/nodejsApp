
console.log("*****************     26. Creating a Node Server     *****************");

// How we get a module in node js
const http = require('http'); // importing http module
const fs = require('fs');

/*function reqListner(req, res) {

}
http.createServer(reqListner);*/

// we can write reqListner function inside createServer
/*http.createServer(function reqListner(req, res) {
    
});*/

// Now we can also use arrow function
const server = http.createServer((req, res) => {
    //console.log(req); // you can check output in serverReqConsoleLog.txt file
    //console.log("Request Url: " + req.url + "Request Methods: " + req.method + "Request headers: " + req.headers);
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter a Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    const method = req.method;
    if(url === '/message' && method === 'POST') {
        // Listen to response. req.on() is a event listner. here we ask to listen data event. But its text so we do like this, if it is file we dneed to do something else
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync('message.txt', message); // Sync means synchronus this will block code execution until this line executed
            fs.writeFile('message.txt', message, err => { // So inseat of sync its better to use wirteFile method 
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            /*res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();*/
        });
        /*fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();*/
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my First Page</title></head>');
    res.write('<body><h1>Hello! from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit(); // Normally we dont call it beacuse we dont want to exit listning in our server
});

server.listen(3000);
