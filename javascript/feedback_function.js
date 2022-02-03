function validateFeedback(form){
    var validation=true;
    var email=form.email.value;
    var subject=form.subject.value;
    var message=form.message.value;
    document.getElementById("errorEmail").innerHTML="";
    document.getElementById("errorSubject").innerHTML="";
    document.getElementById("errorMessage").innerHTML="";
    if(!/^([a-z0-9]+[@]+[a-z0-9]+[.]+[a-z]{2,3})$/.test(email)){
        validation=false;
        document.getElementById("errorEmail").innerHTML="invalid email";
    }
    if(subject.trim()==""||subject.length<3){
        validation =false;
        document.getElementById("errorSubject").innerHTML="subject too short";
    }
    if(message.trim()==""||message.length<10){
        validation =false;
        document.getElementById("errorMessage").innerHTML="message too short";
    }
    if(validation==true){
        alert("Thank you for Feedback");
    }
    return validation;
}