// Dependencies
// =============================================================

var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var asd_resources = sequelize.define("ASD_resources", {
    Name: {
        type: Sequelize.STRING,
        notNull: true
    },
    Location: {
        type: Sequelize.STRING,
        notNull: true
    },
    Phone_Number: {
        type: Sequelize.INTEGER,
        not: ["[a-z]", 'i'],     // will not allow letters
        notNull: true
    },
    Description: {
        type: Sequelize.STRING,
        notNull: true
    },
    Price: {
        type: Sequelize.STRING,
        notNull: true
    },
    Insurance_Accepted: {
        type: Sequelize.BOOLEAN,
        notNull: true
    },
    Catergory: {
        type: Sequelize.INTEGER,
        notNull: true
    },
    Rating: {
        type: Sequelize.INTEGER,
        notNull: true
    },
}, {
        timestamps: false
    });

// Syncs with DB
ASD_resources.sync();

// Makes the ASD Model available for other files (will also create a table)
module.exports = ASD_resources;
