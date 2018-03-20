//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function (sequelize, DataTypes) {

    var ASD_suggested_table = sequelize.define("ASD_suggested_table", {
        Name: DataTypes.STRING,
        Location: DataTypes.STRING,
        Phone_Number: DataTypes.STRING,
        Description: DataTypes.TEXT,
        Price: DataTypes.INTEGER,
        Insurance_Accepted: DataTypes.BOOLEAN,
        Catergory: DataTypes.STRING
    });

    return ASD_suggested_table;

};

