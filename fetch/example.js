 function event2() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: document.getElementById("inputPassword1").value,
      body: document.getElementById("inputPassword2").value,
      userId: document.getElementById("inputPassword3").value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      const resultDiv = document.getElementById("result");
      const mappedData = Object.entries(json)  
        .map(([key, value]) => `<p><b>${key}</b>: ${value}</p>`)
        .join(""); 

      resultDiv.innerHTML = mappedData;
    });
}


 
 
