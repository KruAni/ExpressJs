/* Simple Way 1: Get input from user using node js (Without API concept)*/
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });


/* Simple Way 2: Get input from user using html & node js (With API concept)*/
var express = require("express");
 
 //use the application off of express.
 var app = express();
 
 //define the route for "/"
 app.get("/", function (request, response){
     response.sendFile(__dirname+"/Ex3.html");
 });
 
 app.get("/getname", function (request, response){
     var username = request.query.name;
 
     if (username != "") {
         response.send("Welcome " + username);
     } else {
         response.send("Please provide your good name");
     }
 });
 
 //start the server
 app.listen(8080);
 
 console.log("Something is done at http://localhost:8080");