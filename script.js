console.log("Running!");
// Place all varaibles here
var lives = 10;
var score = 0;
var star = document.querySelector("#star");
var x = document.querySelector("#error");
var scoreContainer = document.querySelector(".score");
var livesContainer = document.querySelector(".lives");
var messageContainer = document.querySelector("#message");

// Place all event listeners here 
star.addEventListener("click", function(){
  score++;
  if(score<10){
    scoreContainer.innerHTML = `Score: ${score}`
  } 
  else {
    
    messageContainer.innerHTML = `
      <style>
        body {
          background-color:green;
          margin: 100px;
        }
      </style>
      <h1>NEW HIGH SCORE!</h1>
      <h1>FINAL SCORE: ${score}</h1>`
  }

})

x.addEventListener("click", function(){
  lives--;
  if(lives>0) {
    livesContainer.innerHTML = `Lives: ${lives}`;
  }
  else {
    messageContainer.innerHTML = `
      <style>
        body {
        background-color:black;
        margin: 100px;
        }
      </style>
      <h1>GAME OVER</h1>`
  }
})