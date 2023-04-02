const btnEl = document.getElementById("btn");
const jokeEl  = document.getElementById("joke");
const apiKey = 'YLoaQgvZx2/Dt3wTOT7Hhw==2sGIZPm5IA6ALY7t';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    jokeEl.innerText = "Updating...";
    btnEl.disable = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json();

    btnEl.disable = true;
    btnEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke)
