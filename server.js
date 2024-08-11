import http from 'http';

const server = http.createServer((req,res)=>{
    res.end('hello null void');
});

server.listen(8000,(PORT)=>{
    console.log(`Server Running on port ${PORT}`)
})

