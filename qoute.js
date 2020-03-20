const RANDOM_QOUTE_API_URL = 'http://api.quotable.io/random';
const author = document.getElementById('author');
const text = document.getElementById('text');
document.getElementById('new-quote').addEventListener("click", getRandomQoute);

// fetch data from api and render it to the page 
// everytime the page is load and the "new qoute" button is clicked
function getRandomQoute(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`${data.content} —${data.author}`);
      text.textContent = `" ${data.content} "`;
      author.textContent = `- - ${data.author}`;
    })
};

getRandomQoute();

