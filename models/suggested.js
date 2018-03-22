//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function (sequelize, DataTypes) {

    var suggested = sequelize.define("suggested", {
        Name: DataTypes.STRING,
        Location: DataTypes.STRING,
        Phone_Number: DataTypes.STRING,
        Description: DataTypes.TEXT,
        Price: DataTypes.INTEGER,
        Insurance_Accepted: DataTypes.BOOLEAN,
        Category: DataTypes.STRING
    });

    return suggested;

};

