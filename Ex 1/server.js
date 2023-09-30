var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(request,response){
    var pathname=url.parse(request.url).pathname;
    console.log("Request for "+pathname+" is recieved.");
    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);
            response.writeHead(404, {'Content-Type':'text/html'});
        }
        else{
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });

    var options={
        host:'localhost',
        port:'8081',
        path:'/login.html',
        // method:'GET',
    };
    var callback= function(response){
        var body='';
        response.on('data',function(data){
            body+=data;            
        });
        response.on('error', function(){
            console.log(error);
        });
        response.on('end',function(){
            console.log(body);
            // response.end();
        });
    }
    
    var req=http.request(options, callback);
    req.end();
}).listen(8081);
console.log("Our Server is running at http://localhost:8081/login.html");


// var http=require('http');
// const { response } = require('express');
// const { listenerCount } = require('process');
// var options={
//     host:'localhost',
//     // port:'8081',
//     path:'/login.html',
//     method:'GET',
// };
// var callback= function(response){
// var body='';

// response.on('data',function(data){
//     body+=data;
// });

// response.on('error', function(){
// console.log(error);
// });
// response.on('end',function(){
//     console.log(body);
// });
// response.on('finish', function(){
//     console.log("Completed Successfully...")
// })

// }
// var req=http.request(options, callback);
// req.end();

// const https = require('https');

// const options = {
//   hostname: 'example.com',
//   port: 443,
//   path: '/todos',
//   method: 'GET',
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.end();
