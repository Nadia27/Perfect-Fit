//Dependencies 
var express = require("express"); 
var bodyParser = require("body-parser"); 
//==================================================================

//require entire models folder
var db = require("./models");

// Sets up the Express App
var app = express(); 
var PORT = process.env.PORT || 3000; 

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
require("./routes/map-api-routes.js")(app);
require("./routes/html-routes.js")(app);


//connection to database
//sync built in method that creates table
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});