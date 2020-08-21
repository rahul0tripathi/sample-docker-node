var http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Hello From Sample-node-Container \nrequestId :' +'_' + Math.random().toString(36).substr(2, 9))
    res.end();
})
server.listen(8000);
