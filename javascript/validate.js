function validate(form){
    var validation=true;

    var firstName=form.fName.value;
    var lastName=form.lName.value;
    var emailAdd=form.email.value;
    var emailPattern=/^([a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,3})$/;

    var phoneNumber=form.pNum.value;
    var patternPhone = /^([0-9]{10})$/;

    var ipass=form.iPassword.value;
    var cpass=form.cPassword.value;

    var g=form.gender;
    var gChoosen=false;

    var check=form.terms;

    var yyyydob=form.yyyy.value;
    var yyyyPattern=/^([0-9]{4})$/;

    var mmdob=form.mm.value;
    var mmPattern=/^([0-9]{2})$/;

    var dddob=form.dd.value;
    var ddPattern=/^([0-9]{2})$/;

    var captcha=form.sCode.value;

    document.getElementById("sCodeError").innerHTML="";
    document.getElementById("cBoxError").innerText="";
    document.getElementById("genderError").innerHTML="";
    document.getElementById("fNameError").innerHTML="";
    document.getElementById("lNameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("pNumError").innerHTML="";
    document.getElementById("iPassError").innerHTML="";
    document.getElementById("cPassError").innerHTML="";
    document.getElementById("dateError").innerHTML="";





    for(var i=0;i<g.length;i++){
        if(g[i].checked){
            validation=true;
            gChoosen=true;
        }
    }

    if(gChoosen==false){
        //if user did not select his/her gender
        validation=false;
        document.getElementById("genderError").innerHTML="Select your gender";

        }


    if(firstName.trim()==''){
        validation=false;
        document.getElementById("fNameError").innerHTML="First Name cannot be blank";
    }

    if(lastName.trim()==''){
        validation=false;
        document.getElementById("lNameError").innerHTML="Last Name cannot be blank";
    }
    if(emailAdd.trim()=='') {
        // email field is blank
        validation = false;
        document.getElementById("emailError").innerHTML= "Email cannot be blank";
    }
    else if(!emailPattern.test(emailAdd)){
        validation=false;
        document.getElementById("emailError").innerHTML="Email pattern is not in proper format";
    }
    if(phoneNumber.length==0){
        validation=false;
        document.getElementById("pNumError").innerHTML="Phone Number Cannot be blank";
    }
    else if(!patternPhone.test(phoneNumber)) {
        // the pattern did not matched
        validation = false;
        document.getElementById("pNumError").innerHTML= "Pattern do not matched";
    }
    if(ipass.trim()==''){
         // password field is empty
        validation=false;
        document.getElementById("iPassError").innerHTML="Password should not be blank";

    }
    if(cpass.trim()==''){
        // password field is empty
        validation=false;
        document.getElementById("cPassError").innerHTML="Confirm Password should not be blank";

    }

    if(ipass!=cpass){
        //password didnot matched
        validation=false;
        document.getElementById("cPassError").innerHTML="Password didnot matched";
    }


    if(yyyydob.trim()=='' || mmdob.trim()=='' || dddob.trim()=='' || !yyyyPattern.test(yyyydob)
        || !mmPattern.test(mmdob) || !ddPattern.test(dddob)){
        validation=false;
        document.getElementById("dateError").innerHTML="Invalid Date of Birth";

    }
    else if(parseInt(yyyydob)<1979 || parseInt(mmdob)>12 || parseInt(dddob)>31){
        validation=false;
        document.getElementById("dateError").innerHTML="Invalid Date of Birth";
    }

    if(captcha!="A4S22P10"){
        validation=false;
        document.getElementById("sCodeError").innerHTML="Captcha is incorrect";
    }


    if(!check.checked){

        validation=false;
        document.getElementById("cBoxError").innerText="Please select the terms and condition";
    }
    if(validation==true){
        alert("Registration Successful");
    }
    return validation;

}

function validatelogin(form){
    var validation=true;

    var emailAdd=form.emailLogin.value;
    var emailPattern=/^([a-zA-Z0-9]+[@]+[a-zA-Z0-9]+[.]+[a-z]{2,3})$/;

    var pass=form.password.value;

    document.getElementById("passwordLoginError").innerHTML="";
    document.getElementById("emailLoginError").innerHTML="";

    if(emailAdd.trim()==''){
        validation=false;
        document.getElementById("emailLoginError").innerHTML="Email incorrect";
    }

    else if(!emailPattern.test(emailAdd)){
        validation=false;
        document.getElementById("emailLoginError").innerHTML="Email pattern is not in proper format";
    }

    if(pass.trim()=='') {
        // password field is empty
        validation = false;
        document.getElementById("passwordLoginError").innerHTML="Enter Your Password.";
    }


    return validation;
}