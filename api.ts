// Ejercicio 1
const jokeEl: HTMLElement = document.getElementById("joke") as HTMLElement;
const jokeBtn: HTMLElement = document.getElementById("jokeBtn") as HTMLElement;
jokeEl.style.visibility = "hidden";
jokeBtn.addEventListener("click", generateJoke);
jokeEl.style.visibility = "visible";

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const file = await fetch("https://icanhazdadjoke.com", config);
  const data = await file.json();
  console.log(data.joke);
  jokeBtn.innerHTML = "Get another joke";

  const scoreButton: HTMLElement = document.getElementById("scoreButtons") as HTMLElement;
  scoreButton.style.display = "";
  // Ejercicio 2
  jokeEl.innerHTML = data.joke;
}

// Ejercicio 3
interface Joke {
  joke: string;
  score: string;
  date: string;
}
const reportJokes: any = [];

function getPoints(id: string) {
  const punctuation:string = id;
  const textDate = new Date().toISOString();
  const lastJoke: any = (document.getElementById("joke") as HTMLElement)?.outerText;
  const textLastJoke: string= lastJoke;
  const jokeIndex = reportJokes.findIndex(
    (e:any) => textLastJoke === e.joke
  );
  const joke: Joke = { joke: textLastJoke, score: punctuation, date: textDate };

  if (textLastJoke !== "" && jokeIndex < 0) {
    reportJokes.push(joke);
  } else {
    reportJokes[jokeIndex].score = punctuation;
  }

  console.log(reportJokes);
}

