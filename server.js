//Dependencies 
var express = require("express"); 
var bodyParser = ('body-parser'); 
//==================================================================

//require entire models folder
var db = require('./app/models');

var PORT = process.env.PORT || 3000; 
var app = express(); 

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

//connection to database
//sync built in method that creates table
db.sequelize.sync().then(function () {
    //sync database
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});