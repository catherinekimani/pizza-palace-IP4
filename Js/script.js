// javascript contact form
function send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name.length == ""){
        alert("please enter name");
    }else if(email == ""){
        alert("invalid email!!");
    }else if(message == ""){
        alert("Please enter message");
    }else if(name && email == true){
    }else{
        alert(name + " " + "We have received your message. Thank you for reaching out to us.");
    };
}