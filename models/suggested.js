//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function (sequelize, DataTypes) {

    var suggested = sequelize.define("suggested", {
        Name: DataTypes.STRING,
        Address: DataTypes.STRING,
        Phone_Number: {
            type: DataTypes.STRING,
            validate: {
                //regular expression: validate phone number
                is: /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/i
            }
        },
        Price: DataTypes.INTEGER,
        Insurance_Accepted: DataTypes.STRING,
        Category: DataTypes.STRING
    });

    return suggested;

};

