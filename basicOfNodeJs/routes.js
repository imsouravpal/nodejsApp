/**
 * What ever routing logic we write in basicOfNode.js file
 * we'll separate an write the same logic in this file
 */

const fs = require('fs');

const requestHandler = (req, res) => {
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
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is my First Page</title></head>');
    res.write('<body><h1>Hello! from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;
/*// Other way to export: This is wen we export multiple things we can export it as an Object
module.exports = {
    handler: requestHandler,
    someText: 'Some text coded text'
};
// Above code we can also write like this 
module.exports.handler: requestHandler; // or shortcuts in node.js ----> exports.handler: requestHandler;
module.exports.someText: 'Some text coded text'; // shortcuts ----> exports.someText: 'Some text coded text';
*/
