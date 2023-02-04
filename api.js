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
  /* jokeEl.innerHTML = data.joke; */
  jokeBtn.innerHTML="Get another joke";
}