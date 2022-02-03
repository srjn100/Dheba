function validateSend(form) {
    var validation=true;
    var email=form.email.value;
    var amount=form.amount.value;
    document.getElementById("emailerror").innerHTML="";
    document.getElementById("amounterror").innerHTML="";
    if(!/^([0-9a-z]+[@]+[0-9a-z]+[.]+[a-z]{2,3})$/.test(email)){
        validation=false;
        document.getElementById("emailerror").innerHTML+="invalid email";
    }
    if(!/\d/.test(amount)||parseInt(amount)<100){
        validation=false;
        document.getElementById("amounterror").innerHTML+="minimum amount is 100";
    }
    if(validation==true){
        alert("Amount successfully sent");
    }
    return validation;
}