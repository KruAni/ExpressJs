var express = require('express');
var app = express();
app.use(express.urlencoded({extended:false}))
var fs = require('fs');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({ extended: false });

app.get('/', function (req, res) {

    // fs.readFile('index.html', function (err, data) {
    //     if (err) {
    //         console.log(err)
    //     }
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     res.end();
    // })

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(' <br> <center>')
        res.write(' <form method="post" action="/">')
        res.write('<div> Name: <input type="text" id="name" name="name"></div><br>')
        res.write(' <div>DOB: <input id="dob" name="dob" type="date"></div>')
    
        res.write(' <br><div>Qualification: <input type="text" name="qualification"><br></div>')
        res.write(' <div>Phone Number: <input type="text" name="phonenumber"><br></div>')
        res.write(' <div>Country: <input type="text" name="country"><br></div>')
        res.write('<div> Resume: <input type="file"><br></div>')
    
        res.write('<div> <button>Submit</button></div>')
        res.write('  </form>')
        res.write(' </center>')
        res.end()

})
app.post('/', urlencode, function (req, res) {
    let name = req.body.name;
    let dob = req.body.dob;
    let year = dob.slice(0,4)

    let phonenumber = req.body.phonenumber;
    let country=req.body.country;
    // var number = /[0-9]{10}/;
    var number = new RegExp('/(0|91)?[6-9][0-9]{9}/')
    no_test=number.test(phonenumber)
    console.log(no_test)
    
    var special=new RegExp('/^[A-Za-z]+$/')
    name_test=special.test(name)
    console.log(name_test)
    // let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    // let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];
    
    // testEmails.forEach((address) => {
    //     console.log(regex.test(address))
    // });

    res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<br><center>')
    if (name_test === true)
        res.write('Name cannot be ' + `${name} `+'<br>')
    else if(name===''){
        res.write('Name cannot be empty <br>')
    }
        else {
        res.write('Welcome ' + `${name}`+'<br>')

    }

    if (no_test === false) {
        res.write('Mobile Number: '+`${phonenumber}`+'<br>')
    }
    
    if (no_test === true) {
        res.write('Invalid Mobile Number <br>')
    }

    if(year >=2004){
        res.write('Minimum age should be above 18 <br>')
    }
    else{
        res.write('DOB: '+`${dob}`+'<br>')
    }
    if(country!='')
    {
        res.write('Country: '+`${country}`)
    }
 
res.write('</center>')
    res.end()
})
app.listen(8080)
console.log('server running on 8080')