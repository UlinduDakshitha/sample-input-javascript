function event1(){
    var num1 = (document.getElementById("inputPassword1").value);
    var num2 = (document.getElementById("inputPassword2").value);

     if(num1.trim().toLowerCase()===num2.trim().toLowerCase()){
        document.getElementById("result1").innerText =  "Equal";
     }
        else{
          document.getElementById("result1").innerText =  "Not Equal";
}
function event2(){
    var num1 = (document.getElementById("inputPassword3").value);
    var num2 =(document.getElementById("inputPassword4").value);

    if(num1.trim().toLowerCase()===num2.trim().toLowerCase()){
        document.getElementById("result2").innerText =  "Equal";
    }
    else{
        document.getElementById("result2").innerText =  "Not Equal";
    }
}
}