function setCapital(){
    const text3=document.getElementById("inputPassword1").value;
    
    if(text3.length>0){
        const capitalizedFirstletter=text3.charAt(0).toUpperCase()+text3.slice(1).toLowerCase();
        document.getElementById("result3").innerText=capitalizedFirstletter;
}
}