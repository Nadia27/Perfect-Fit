//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function(sequelize, DataTypes) {

    var resources = sequelize.define("resources", {
        Name: DataTypes.STRING,
        Location: DataTypes.STRING, 
        Phone_Number: DataTypes.STRING,
        Description: DataTypes.TEXT, 
        Price: DataTypes.INTEGER,
        Insurance_Accepted: DataTypes.BOOLEAN,
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
        
/* 
$('.mapmarker').on('click', function(event) {
    event.preventDefault();
    var lat = $(this).data.lat;
    var lng = $(this).data.lng;

    $.post('/api/route/for/map/crap', {
        lat: lat,
        lng: lng 
    }).then(function(data) {
        console.log(data);
    });
}); */





