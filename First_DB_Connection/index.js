const express = require('express');
const mongoose = require('mongoose');
const properties = require('./properties');

const app = express();

app.use(express.json());

var DBurl=require("./properties").DB_URL;

mongoose.connect(DBurl)
mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB using Mongoose JS")
    console.log("Default connection is open to",DBurl)
})

mongoose.connection.on("error", (error)=>{
    console.log(error)
})

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
    });
var Person = mongoose.model("Person", personSchema);

app.get('/person', function(req, res){
    res.sendFile(__dirname+"/person.html")
    // console.log(_dirname)
});

app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message', {
        message: "Sorry, you provided worng info", type: "error"});
    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
        newPerson.save(function(err, Person){
            if(err)
                res.render('show_message', {message: "Database error", type: "error"});
            else
                res.render('show_message', {
                    message: "New person added", type: "success", person: personInfo
                });
        });
    }
});


app.listen(3000, () => {
    // console.log(`Server Started at ${3000}`)
    console.log(`Server Started at http://localhost:3000/`)
    // mongodb://localhost:27017
})