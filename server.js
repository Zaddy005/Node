import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const port = process.env.PORT;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename,__dirname);

const server = http.createServer(async (req,res)=>{
    // res.setHeader('Content-Type','text/plain');
    // res.statusCode = 404;

    // res.writeHeader(200,{'Content-Type':"text/html"});
    // res.end("<h1> Hello World! </h1>");

    // console.log(req.url);
    // console.log(req.method);

    try{
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname,'public','index.html');
            }else if(req.url === '/about'){
                filepath = path.join(__dirname,'public','about.html');
            }else{
                throw new Error('not found');
            }

            const data = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }else{
            throw new Error('Method not allowed');
        }
    }catch(err){
        res.writeHeader(400,{'Content-Type':'text/plain'});
        res.end('Server Error');
    }



});

server.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
});