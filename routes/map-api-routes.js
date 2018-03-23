// Dependencies 
// Requiring the resources.js model
var db = require("../models");

// Routes
module.exports = function (app) {
    // GET route for getting all of the resources
    app.get("/api/resources", function (req, res) {
        db.resources.findAll({

        }).then(function (dbResources) {
            res.json(dbResources);
            
        });
    });
};

