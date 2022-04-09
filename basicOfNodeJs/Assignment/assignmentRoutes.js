const assignmentRequestHandler = (req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title> Assignment </title></head>');
        res.write(
            '<body><h1>Hello! This is my Assignment</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title> Assignment </title></head>');
        res.write('<body><h1>User Lists</h1> <ul><li>User1</li><li>User2</li><li>User3</li><li>User4</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    const method = req.method;
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => { // Executed for every single pieces of incoming data.
            body.push(chunk);
            //console.log(chunk); // Output: <Buffer 75 73 65 72 6e 61 6d 65 3d 53 4f 55 52 50 41 4c>
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
        res.statusCode = 302; // On network tab you can see 302 before create-user
        res.setHeader('Location', '/'); // This will redirect to our "/" home page
        res.end();
    }

    // Codes if Page not Found or Something
    // .....
}

module.exports = assignmentRequestHandler;
