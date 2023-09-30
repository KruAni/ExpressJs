var express = require('express');
var app = express();
var fs = require("fs");
var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
        }
    }
var id = 2;


app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
})

app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(__dirname)
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log(data);
        res.end( JSON.stringify(data));
    });
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        var users = JSON.parse( data );
        var user = users["user" + req.params.id] ;
        console.log( user );
        res.end( JSON.stringify(user));
    });
})

app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    console.log(__dirname)
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        deldata = JSON.parse( data );
        delete deldata["user" + 2];
        // var deluser = data["user" + req.params.id];
        // delete deluser
        // delete user[id]
        console.log( deldata );

        // data = JSON.parse( deldata );
        const myJSON = JSON.stringify(deldata);
        fs.writeFile("users.json", myJSON, (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
              console.log("The written has the following contents:");
              console.log(fs.readFileSync("users.json", "utf8"));
            }
          });
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8082, function () {
// var host = server.address().address
// var port = server.address().port

console.log("Example app listening at http://localhost:8082")
})