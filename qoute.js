const RANDOM_QOUTE_API_URL = 'http://api.quotable.io/random';
const author = document.getElementById('author');
const text = document.getElementById('text');
let randomFontColor = document.getElementsByClassName('randomColor');
let bgColor = document.getElementsByClassName('bgRandomColor');

document.getElementById('new-quote').addEventListener("click", getRandomQoute);



// fetch data from api and render it to the page 
// everytime the page is load and the "new qoute" button is clicked
function getRandomQoute(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        text.innerHTML = `<span class="quotation-mark">"</span> ${data.content}  `;
      author.textContent = `- ${data.author}`; 
    })

  changeColor()
};


//change the background and font color
//everytime the page load and the "New Quote" button was clicked
function changeColor(){
  color = createColor();
  for(let i = 0; i < randomFontColor.length; i++){
    
     randomFontColor[i].style.color = color;
  }
  for(let i = 0; i < bgColor.length; i++){
    bgColor[i].style.backgroundColor = color;
    
   }
};



// a function to generate random color for the
// background and font
function createColor(){
     //pick a "red" from 0 - 255
     var r = Math.floor(Math.random() * 255);
     //pick a "green" from 0 - 255
     var g = Math.floor(Math.random() * 255);
     //pick a "blue" from 0 - 255
     var b = Math.floor(Math.random() * 255);
 
     return "rgb(" + r + ", " + g + ", " + b + ")";
}


getRandomQoute();
changeColor();

