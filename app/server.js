//Dependencies 
var express = require("express"); 
var bodyParser = ('body-parser'); 
//==================================================================

//require entire models folder
var db = require('./app/models');


var PORT = process.env.PORT || 3000; 
var app = express(); 

//connection to database
//sync built in method that creates table
db.sequelize.sync().then(function () {
    //sync database
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});