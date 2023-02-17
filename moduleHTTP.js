const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 8000;

http.createServer((request, response) => {
    // response.write("hello world");
    // return response.end();


    // if(request.url === '/home'){
    //     const read = fs.createReadStream("ruta_del_html");
    // read.pipe(Response);
    // return Response.end;
    
    // }
    // Response.write('hello world');
    // Response.end
    
//}).listen(port)

if (request.url === '/'){
    response.write(fs.readFileSync('index.html','utf-8'));
    return response.end()
}

}).listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`)
});

