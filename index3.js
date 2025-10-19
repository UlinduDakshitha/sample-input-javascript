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

function showResult(){
    var value = document.getElementById('inputPassword3').value;
    
    if(value<=35){
        document.getElementById("result5").innerHTML = `<h2>F</h2>`;
    }
    else if(value>=35){
        document.getElementById("result5").innerHTML = `<h2>D</h2>`;
    }
    else if(value>=55){
        document.getElementById("result5").innerHTML = `<h2>C</h2>`;
    }
    else if(value>=65){
        document.getElementById("result5").innerHTML = `<h2>B</h2>`;
    }
    else{
        document.getElementById("result5").innerHTML = `<h2>A</h2>`;
    }
}

function showText(){
    var value = document.getElementById('inputPassword4').value;

    switch(value){

        case 'Intern':
            document.getElementById("result6").innerHTML = `<h2>Intern Software Engineer</h2>`;
        break;
    case 'ASE':
        document.getElementById("result6").innerHTML = `<h2>Associate Software Engineer</h2>`;
        break;  

    case 'SSE':
        document.getElementById("result6").innerHTML = `<h2> Senior Software Engineer</h2>`;
        break;

    case 'TL':
        document.getElementById("result6").innerHTML = `<h2>Tech Lead</h2>`;
        break;

    default:
        document.getElementById("result6").innerHTML = `<h2>Error: Invalid Input</h2>`;
    }
}