function check(){
    var name, email, pass, conpass;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    pass = document.getElementById('pass').value;
    conpass = document.getElementById('conpass').value;
    if(name == "" || email == "" || pass == "" || conpass == "")
    {
        alert("Please fill all fields");
    }
    if(pass != conpass)
    {
        alert("Passwords do not match");
    }
    if((name != "" && email != "" && pass != "" && conpass != "")&&(pass == conpass))
    {
        alert("Sign-up successful!");
    }
}

function check2(){
    var email, pass;
    email = document.getElementById('email').value;
    pass = document.getElementById('pass').value;
    if(email == "" || pass == "")
    {
        alert("Please fill all fields")
    }
    else if(email == "test_email@gmail.com" && pass == "test_password")
    {
        alert("Login succesful!");
    }
    else if(email != "test_email@gmail.com" && pass == "test_password")
    {
        alert("Email incorrect");
    }
    else if(email == "test_email@gmail.com" && pass != "test_password")
    {
        alert("Password incorrect");
    }
    else
    {
        alert("Email and password do not match");
    }
}