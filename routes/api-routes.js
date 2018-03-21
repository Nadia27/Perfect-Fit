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
    //     // POST route for saving a new resource
    //     app.post("/api/resources", function(req, res){
    //         console.log(req.body);
    //         db.resources.create({
    //             location: req.body.location,
    //             phone_Number: req.body.Phone_Number,
    //             description: req.body.Description,
    //             price: req.body.Price,
    //             insurance_Accepted: req.body.Insurance_Accepted,
    //             category: req.body.category
    //         })
    //     })
};

