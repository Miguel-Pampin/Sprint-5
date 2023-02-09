//Ejercicio 1
let jokeEl = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');
jokeEl.style.visibility = "hidden";
jokeBtn.addEventListener('click', generateJoke);
jokeEl.style.visibility = "visible";

async function generateJoke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };
  let file = await fetch('https://icanhazdadjoke.com', config);
  let data = await file.json();
  console.log(data.joke);
  jokeBtn.innerHTML = "Get another joke";

  const scoreButton = document.getElementById(
    "scoreButtons");
  scoreButton.style.display = "";
  //Ejercicio 2
  jokeEl.innerHTML = data.joke;
}
//Ejercicio 3
const reportJokes = []
function getPoints(id) {
  const punctuation = id;
  const textDate = new Date().toISOString();
  const lastJoke = document.getElementById('joke')?.outerText;
  const textLastJoke = lastJoke;
  const jokeIndex = reportJokes.findIndex((e) => textLastJoke === e.joke);
  const jokes = { joke: textLastJoke, score: punctuation, date: textDate }

  if (textLastJoke !== '' && jokeIndex < 0) {
    reportJokes.push(jokes);
  }
  else {
    reportJokes[jokeIndex].score = punctuation;

  }
  console.log(reportJokes);
}
