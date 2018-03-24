
// Variable for map
var map;
// Variable for infoWindow
var infowindow;

// Function that initializes and adds the map when the web page loads
function initMap() {
    // Variable for the center location
    var atlanta = { lat: 33.940939, lng: -84.217438 };
    // To create a new Google maps object and find the map div on the web page
    map = new google.maps.Map(document.getElementById('map'), {
        // Zoom property specifies the zoom level for the map
        zoom: 9,
        // Center property tells the API where to center the map. The map coordinates are set in the order: latitude, longitude.
        center: atlanta,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

// Function to create markers on map based on latitude and longitude
function makeMarkers() {
    $.get('/api/resources').then(function (data) {
        for (var i = 0; i < data.length; i++) {
            (function (j) {
                var name = data[j].Name;
                var lat = Number(data[j].Latitude);
                var lng = Number(data[j].Longitude);

                var namewindow = new google.maps.InfoWindow({
                    content: `<h3>${name}</h3>`
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: map
                });

                marker.addListener('mouseover', function () {
                    namewindow.open(map, marker);
                });

                marker.addListener('mouseout', function () {
                    namewindow.close();
                });

                marker.addListener('click', function () {
                    updatePageContent(data[j])
                });
            })(i);
        }
    });
}

var priceRanges = {
    0: 'FREE',
    1: '$',
    2: '$$',
    3: '$$$',
    4: '$$$$',
    5: '$$$$$',
};

// Function to get each ASD center's complete info when clicking on the marker
function updatePageContent(data) {
    var infoEl = $('#info');
    infoEl.empty();
    var name = data.Name;
    var address = data.Address;
    var phone = data.Phone_Number;
    var description = data.Description;
    var insuranceAccepted = data.Insurance_Accepted;
    var category = data.Category;
    var price = data.Price;

    var nameEl = $(`<h3 class="text-center">${name}</h3>`);
    var addressEl = $(`<p class="text-center">Address: ${address}</p>`);
    var phoneEl = $(`<p class="text-center">Phone: ${phone}</p>`);
    var descriptionEl = $(`<p class="text-center">Description: ${description}</p>`);
    var insuranceAcceptedEl = $(`<p class="text-center">Insurance Accepted: ${insuranceAccepted ? 'Yes' : 'No'}</p>`);
    var categoryEl = $(`<p class="text-center">Category: ${category}</p>`);
    var priceEl = $(`<p class="text-center">Price: ${priceRanges[price]}</p>`);
    var recommendEl = $('<a href="recommend.html" class="nav-link waves-effect text-center" target="_blank"> Recommend </a>')
    infoEl.append(nameEl);
    infoEl.append(addressEl);
    infoEl.append(phoneEl);
    infoEl.append(descriptionEl);
    infoEl.append(insuranceAcceptedEl);
    infoEl.append(categoryEl);
    infoEl.append(priceEl);
    infoEl.append(recommendEl);
}

// Ready Function
$(document).ready(function () {
    initMap();
    makeMarkers();
});