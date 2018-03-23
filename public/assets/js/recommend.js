//When the user clicks submit btn
$("#submit").on("click", function(event){
    event.preventDefault();

    //TODO:FIXME: price level should be display 0 (meaning free service) through 5 (highest) 
    //TODO:FIXME: changing number to dollar sign
    //TODO:FIXME: axe price and insurance fields ?? let company do own research
    //TODO:FIXME: Pop up alerting user recomm was received
    
    
    //Create a new resource object
    var newRes = {
        Name: $("#recoName").val().trim(),
        Address:$("#inputAddress").val().trim(),
        Phone_Number: $("#recoPhoneNumber").val().trim(), 
        Price: $("#recoPrice").val(),
        Insurance_Accepted: $("#recoInsurance").val(),
        Category: $("#recoCategory").val()
    };

    $.post("/api/suggested", newRes)
        .then(() => console.log('Finished'))
        .catch(e => console.error(e));

    //console.log(newRes);
    
    // Empty each input box by replacing the value with an empty string
    $("#recoName").val("");
    $("#inputAddress").val("");
    $("#recoPhoneNumber").val("");
    $("#recoPrice").val("");
    $("#recoInsurance").val("");
    $("#recoCategory").val("");


});