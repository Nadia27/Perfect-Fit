// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our resources model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

// POST route for saving a new post
    app.post("/api/suggested", function (req, res) {
        console.log(req.body);
        db.suggested.create({
            Name: req.body.Name, 
            Address: req.body.Address,
            Phone_Number: req.body.Phone_Number, 
            Price: req.body.Price, 
            Insurance_Accepted: req.body.Insurance_Accepted, 
            Category: req.body.Category
        }).then(() => res.send('Ok')); 
           // res.json(dbsuggested);
        });
    };