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

    // GET route for getting all of the resources
    app.get("/api/resources", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.ASD_resources_table.findAll({}).then(function (dbASD_resources_table) {
            // We have access to the resources as an argument inside of the callback function
            res.json(dbASD_resources_table);
        });
    });

    app.get("/", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.ASD_resources_table.findAll({}).then(function (dbASD_resources_table) {
            // We have access to the resources as an argument inside of the callback function
            res.json(dbASD_resources_table);
        });
    });
};