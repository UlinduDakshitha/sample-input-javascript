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