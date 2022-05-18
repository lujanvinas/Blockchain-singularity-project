document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    // selected number of jokes
    const number= document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://icanhazdadjoke.com/search?limit=${number}`, true);

    xhr.setRequestHeader('Accept', 'application/json');

    // when we get the data..
    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            // console.log(response)
            

            let output= '';

            if(response.status === 200) {
                response.results.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`

                })
            } else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}

