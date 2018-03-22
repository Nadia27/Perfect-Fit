// Array to hold ASD centers and corresponding latitude and logitude
// var locations = [
//     ["Marcus Autism Center", 33.809384, -84.335368],
//     ["Kiddo's Clubhouse", 34061336, -84.238194],
//     ["Kiddo's Clubhouse Foundation", 34061336, -84.238194],
//     ["Parent to Parent of Georgia", 33.887516, -84.263388],
//     ["Right Start Therapies", 33.854175, -84.025338],
//     ["The Bridge of Georgia", 33.802434, -83.702255],
//     ["The Cloverleaf School", 33.841700, -84.262889],
//     ["MDE School", 33.986888, -84.428751],
//     ["Sensations Therafun", 33.823227, -84.347908],
//     ["Neveland Aquatics", 34.257022, -84.166505],
//     ["Haven Hills Therapeutic Riding Center", 33.571851, -84.633583],
//     ["Stone Soup Camp", 33.836338, -83.729502],
//     ["Camp You B You", 33.787192, -84.307319],
//     ["DDD Foundation", 33.827187, -84.341341],
//     ["Children's Healthcare of Atlanta", 33.793936, -84.319958],
//     ["Wheat Mission in Atlanta", 33.927360, -84.147623],
//     ["Annandale Village", 34.037512, -84.062933],
//     ["Disability Link", 33.839800, -84.256196]
// ];

// Function that initializes and adds the map when the web page loads
function initMap() {
    // Variable for map
    var map;
    // Variable for infoWindow
    var infowindow;
    // Variable for the center location 
    var atlanta = { lat: 33.940939, lng: -84.217438 };
    // To create a new Google maps object and find the map div on the web page
    map = new google.maps.Map(document.getElementById("map"), {
        // Zoom property specifies the zoom level for the map
        zoom: 9,
        // Center property tells the API where to center the map. The map coordinates are set in the order: latitude, longitude.
        center: atlanta,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
};

// function getResources() {
//     $.get("/api/resources", function(data) {
//         for (var i = 0; i < data.length; i++) {
//             console.log(data[i]);
//         };
//     });
// };



    infowindow = new google.maps.InfoWindow({});

//     // For loop to mark/pin each ASD center from the array with marker based on latitude and longitude
//     for (var i = 0; i < locations.length; i++) {
//             var marker = new google.maps.Marker({
//                 position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//                 map: map,  
//             });
//             google.maps.event.addListener(marker, "mouseover", (function (marker, i) {
//                 return function () {

//                     infowindow.setContent(locations[i][0]);
//                     infowindow.open(map, marker);
//                 }
//             })(marker, i));

//             marker.addListener("mouseout", function () {
//                 infowindow.close();
//             });
//     };
// };

// $('.mapmarker').on('click', function(event) {
//     event.preventDefault();
//     var lat = $(this).data.lat;
//     var lng = $(this).data.lng;

//     $.post('/api/resources/', {
//         lat: lat,
//         lng: lng 
//     }).then(function(data) {
//         console.log(data);
//     });
// });


// google.maps.event.addListener(marker, 'click', (function() {
//     event.preventDefault();
//     var lat = $(this).data.lat;
//     var lng = $(this).data.lng;

//     $.post('/api/resources/', {
//         lat: lat,
//         lng: lng 
//     }).then(function(data) {
//         console.log(data);
//     });
// })

// // When the page loads, grab all of our resources
// $.get("/api/resources", function (data) {

//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i]);

//         var row = $("<div>");
//         row.addClass("resource");

//         row.append((data[i].Name) + " " + (data[i].Location) + " " + (data[i].Phone_Number) + " " + (data[i].Description) +" "+ (data[i].Insurance_Accepted) + " " + (data[i].Catergory) );

//         $("#resources-container").prepend(row);

//     }

// });





    // Ready Function
    $(document)
        .ready(function () {
            initMap();
        });