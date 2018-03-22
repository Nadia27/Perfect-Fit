//When the user clicks submit btn
$("#submit").on("click", function(event){
    event.preventDefault();


   // TODO:FIXME: change location column in db and look making address one box 
    //TODO:FIXME: description should be a text box or axe all together...we as a company do additional research just ask for catergory or brief descript
    //TODO:FIXME: price level should be 1 through 5 
    //TODO:FIXME: change catergory values to actual values 
    //Create a new resource object
    var newRes = {
        Name: $("#recoName").val().trim(),
        //Location:$("#inputAddress").val().trim();
        Phone_Number: $("#recoPhoneNumber").val().trim(), 
        Description: $("#recoDescription").val().trim(), 
        Price: $("#recoPrice").val(),
        Insurance_Accepted: $("#recoInsurance").val(),
        Category: $("#recoCategory").val()



    };

    console.log(newRes); 
});