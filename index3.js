function setCapital(){

const text3 = document.getElementById('inputPassword1').value.trim();

    if (text3.length > 0) {
        const Array = text3.split(' ');       

        const capitalizedWords = Array.map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );

        const finalText = capitalizedWords.join(' ');

    
        document.getElementById('result3').innerText = finalText;

        console.log(Array);
    }
}

  
    function addNumbers(){
    var value = document.getElementById('inputPassword2').value
    let num = value;
    let sum=0;
    for (let i = 0; i < num.length; i++) {
        sum+=Number(num[i]);
    }
    document.getElementById("result4").innerHTML = `<h2>${sum}</h2>`;
}