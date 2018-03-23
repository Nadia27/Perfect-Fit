//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function(sequelize, DataTypes) {
heol
    var resources = sequelize.define("resources", {
        Name: DataTypes.STRING,
        Address:DataTypes.STRING, 
        Phone_Number: {
            type: DataTypes.STRING,
            validate: {
                //regular expression: validate phone number
                is: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/i
            }
        },
        Description: DataTypes.TEXT, 
        Price: DataTypes.INTEGER,
        Insurance_Accepted: DataTypes.STRING,
        Category: DataTypes.STRING,
        Latitude: {
            type: DataTypes.DECIMAL(8,6),
            notNull: true            // won't allow null
        },
        Longitude: {
            type: DataTypes.DECIMAL(8,6),
            notNull: true   // won't allow null
        }
    
    });
        return resources;
};





