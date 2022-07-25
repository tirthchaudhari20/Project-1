function validate(){
    var username = document.getElementById("email").value;
    if ( username == "username"){
    alert ("Login successfully");
    return false;
    }
    else{
    alert("You have entered Wrong Username");
    }
    }