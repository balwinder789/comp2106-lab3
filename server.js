// this variable is important for connection with port 3000
var connect = require('connect');
// URL will run with this variable
var url = require('url');
// For connecting the URL with server
var app=connect();

// create a function called AddNumbers
var AddNumbers = function (req,res,next) {
    // pass the value through URL to server
 var qs=url.parse(req.url,true).query;

 // intialize the variables x and y and with values
 var x=16;
 var y=4;

 // sum the values of x and y in variable (total)
 var total = x+y;

 // display all values after SUM
    res.end(''+x+'+'+y+'='+total)

 };

//create a function called SubtractNumbers
var SubtractNumbers = function (req,res,next) {
    // pass the value through URL to server
    var qs=url.parse(req.url,true).query;

    // intialize the variables x and y and with values
    var x=16;
    var y=4;

    // sum the values of x and y in variable (total)
    var total = x-y;

    // display all values after Subtract
    res.end(''+x+'-'+y+'='+total)

};

//create a function called MultiplyNumbers
var MultiplyNumbers = function (req,res,next) {
    // pass the value through URL to server
    var qs=url.parse(req.url,true).query;

    // intialize the variables x and y and with values
    var x=16;
    var y=4;

    // sum the values of x and y in variable (total)
    var total = x*y;

    // display all values after Multiply
    res.end(''+x+'*'+y+'='+total)

};

//create a function called DivideNumbers
var DivideNumbers = function (req,res,next) {
    // pass the value through URL to server
    var qs=url.parse(req.url,true).query;

    // intialize the variables x and y with values
    var x=16;
    var y=4;

    // sum the values of x and y in variable (total)
    var total = x/y;

    // display all values after divide
    res.end(''+x+'/'+y+'='+total)

};

// create a function for showing a message
var everythingElse=function (req,res,next) {
    res.end("Error!!! Please enter correct URL") ;

}

// These contains the URL. which we will enter for searching on internet
app.use('/lab3/method=add&x=16&y=4',AddNumbers);
app.use('/lab3/method=subtract&x=16&y=4',SubtractNumbers);
app.use('/lab3/method=multiply&x=16&y=4',MultiplyNumbers);
app.use('/lab3/method=divide&x=16&y=4',DivideNumbers);
app.use('/',everythingElse);
// listen for events on port 3000
app.listen(3000);

// this command will print that server is running
console.log('Connect running on port 3000 and we just installed nodemon ');

