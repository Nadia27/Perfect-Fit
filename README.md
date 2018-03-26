# Perfect Fit

Autism Spectrum Disorder is a mental disorder that changes not only the individuals' life afflicted by the condition, but also changes the life of those who are close to them. Despite the numerous programs and aid available in Georgia, as parents and family members, we can't help but worry whether the program we see are truly fit for our loved ones. We at Perfect Fit believe that programs experienced and recommended by families with ASD individuals can help reduce concerns about safety and help bridge the gap. 

# Authors

* Junghoon Yoon https://github.com/juhuyoon/ 
* Daniela Jaros https://github.com/jaro0024 
* Nadia Abby https://github.com/Nadia27
* Jalil Baker https://github.com/twidt 
 

## Getting Started
Come join us at [Perfect Fit](http://perfect-fit-autism.herokuapp.com/)
If you would like to work with the code the repository can be found [here](https://github.com/juhuyoon/Swap_Me_App)

## Built With

* [MDBootstrap](https://mdbootstrap.com/) - The web styling used
* [Firebase](https://firebase.google.com/) - The database used
* [Google Maps API](https://developers.google.com/maps/) - Map interface
* [Geocode API](https://developers.google.com/maps/documentation/geocoding/start) - Finding coordinates via Street Address
* [MySQL](https://www.mysql.com/) - Creation and Storage of databases
* [Node](https://nodejs.org/en/) - Server network to integrate multiple packages to the system. 

### JavaScript Code Snippets

* How to create a interactive google map. [Google Map API]  

    ```function initMap() {    
        console.log("Map initialisation");    
        map = new google.maps.Map(document.getElementById('map'), {    
            center: {    
                lat: {coords},    
                lng: {coords}    
            }, // TODO change to start location    
            zoom: #,    
            mapTypeId: google.maps.MapTypeId.ROADMAP    
        });  
    ``` 
* Sample of Database Seeder of our recommended Autism Centers 
```
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('resources', [{
        Name: 'Marcus Autism Center',
        Address: '1920 Briarcliff Rd NE, Atlanta, GA 30329',
        Phone_Number: 4047859350,
        Description: 'Specializes in diagnoses and various therapy treatment of individual with Autism.',
        Price: 5,
        Insurance_Accepted: true,
        Category: 'Therapy',
        Latitude: 33.809384,
        Longitude: -84.335368, 
        CreatedAt: new Date(),
        updatedAt: new Date()
      },
```

* Routes to connect database to our website/app
```
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
```
* Use of [Sequelize](http://docs.sequelizejs.com/) to organize and use the database
```
//"sequelize" param is connection to database
//"DataTypes" defines what type of data
module.exports = function(sequelize, DataTypes) {

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
```

## FireBase Sign up Authentication

```
  // Sign Up
  var promise = auth.createUserWithEmailAndPassword(email, pass);

  promise.catch(e => console.log(e.message));

});

firebase.auth().onAuthStateChanged(firebase.User, e => {
  if(firebase.User) {
  e.preventDefault();
   window.location = "recommend.html"
    console.log( firebase.User );
  }else {
    console.log('not logged in');
  }
});

if (!firebase.apps.length) {
  firebase.initializeApp({});
};

```



## Acknowledgments

* John McSwain
* Georgia Tech Coding Boot Camp

