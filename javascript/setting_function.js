function validateSetting(form){
    validation=true;
    var email=form.email.value;
    var phone=form.phone.value;
    var password=form.password.value;
    var address=form.address.value;
    document.getElementById("errorEmail").innerHTML="";
    document.getElementById("errorPhone").innerHTML="";
    document.getElementById("errorPassword").innerHTML="";
    document.getElementById("errorAddress").innerHTML="";
    if(!/^([a-z0-9]+[@]+[a-z0-9]+[.]+[a-z]{2,3})$/.test(email)){
        validation=false;
        document.getElementById("errorEmail").innerHTML="invalid email";
    }
    if(!/\d{10}/.test(phone)){
        validation=false;
        document.getElementById("errorPhone").innerHTML="invalid phone no.";
    }
    if(password.trim()==""||password.length<8){
        validation=false;
        document.getElementById("errorPassword").innerHTML="minimum 8 letters required";
    }
    if(address.trim()==""||address.length<10){
        validation=false;
        document.getElementById("errorAddress").innerHTML="minimum 10 letters required";
    }
    if(validation==true){
        alert("Account info saved")
    }
    return false;
}

function pass(){
    var p=document.getElementById("password");
    if(p.type=="password"){
        p.type="text";
    }
    else{
        p.type="password"
    }
}