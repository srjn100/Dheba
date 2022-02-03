function validateWithdraw(form){
    validation=true;
    var bank=form.bank.selectedIndex;
    var name=form.name.value;
    var num=form.num.value;
    var amount=form.amount.value;
    document.getElementById("bankerror").innerHTML="";
    document.getElementById("nameerror").innerHTML="";
    document.getElementById("numerror").innerHTML="";
    document.getElementById("amounterror").innerHTML="";

    if(bank==0){
        validation=false;
        document.getElementById("bankerror").innerHTML+="please select a bank";
    }
    if(name.trim()==""||name.length<10){
        validation=false;
        document.getElementById("nameerror").innerHTML+="invalid name";
    }
    if(!/\d/.test(num)||num.length<10){
        validation=false;
        document.getElementById("numerror").innerHTML+="invalid account number";
    }
    if(!/\d/.test(amount)||parseInt(amount)<1000){
        validation=false;
        document.getElementById("amounterror").innerHTML+="minimum amount is 1000";
    }
    if(validation==true){
        alert("Amount successfuly withdrawn");
    }
    return validation;
}