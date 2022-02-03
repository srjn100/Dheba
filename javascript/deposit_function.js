function validateDeposit(form) {
    var validation=true;
    var ctype=form.ctype.selectedIndex;
    var num=form.num.value;
    var date=form.date.value;
    var visaPattern=/^4[0-9]{12}(?:[0-9]{3})?$/;
    var masterPattern=/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
    var datePattern=/^(\d{4})+[-]+(\d{2})+[-]+(\d{2})$/;
    document.getElementById("ctypeerror").innerHTML="";
    document.getElementById("numerror").innerHTML="";
    document.getElementById("dateerror").innerHTML="";
    if(ctype==0){
        validation=false;
        document.getElementById("ctypeerror").innerHTML+="please select card type";
    }
    if((ctype==1&&!visaPattern.test(num))||
        (ctype==2&&!masterPattern.test(num))){
        validation=false;
        document.getElementById("numerror").innerHTML+="incorrect number";
    }
    if(!datePattern.test(date)){
        validation=false;
        document.getElementById("dateerror").innerHTML+="invalid date";
    }
    if(validation==true){
        alert("Amount successfuly deposited")
    }

    return validation;
}