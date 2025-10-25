    function saveData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {

        const cards = json.map((post) => {
                return `
                    <div style="
                        display: inline-block;
                        margin: 10px;
                        border: 2px solid black;
                        border-radius: 10px;
                        padding: 10px;
                        width: 250px;
                        text-align: center;
                        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                    ">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                        <p>${post.id} </p>
                    </div>
                `;
            });

            document.getElementById("result").innerHTML = cards.join('');
        })
        
}