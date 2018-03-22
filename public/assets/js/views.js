// When the page loads, grab all of our chirps
$.get("/api/resources", function (data) {

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);

        var row = $("<div>");
        row.addClass("resource");

        row.append((data[i].Name) + " " + (data[i].Location) + " " + (data[i].Phone_Number) + " " + (data[i].Description) +" "+ (data[i].Insurance_Accepted) + " " + (data[i].Catergory) );

        $("#resources-container").prepend(row);

    }

});