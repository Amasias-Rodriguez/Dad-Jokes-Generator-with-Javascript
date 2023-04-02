const btnEl = document.getElementById("btn");

const apiKey = 'YLoaQgvZx2/Dt3wTOT7Hhw==2sGIZPm5IA6ALY7t';

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    const response = await fetch(apiURL, options)
    const data = await response.json()

    console.log(data)
}

btnEl.addEventListener("click", getJoke)
