STAR CLICKER GAME
=================
Let's collect some stars.  
![](https://media.giphy.com/media/3ohs4oWkzyVeVgTwKQ/giphy.gif)

Today we are going to design a simple game that awards points when you click on the ⭐️ and takes away points when you click on the ❌.

**GOAL**: Design a game that incrreases your score as you click on the star and decreases your lives when you click on the x. If the score reaches 10, print out a message telling you that they have a new high score.  
![](https://media.giphy.com/media/NB2zoadASgwHHSSBai/giphy.gif)

If the lives reach 0, print out a message telling you that the game is over.  
![](https://media.giphy.com/media/1upn2bYXOKcvIjOO5w/giphy.gif)

TASKS FOR TODAY
---------------
1. Declare a variable called `var score` and initialize it with a value of 0. 
2. Declare a variable called `var lives` and initialize it with a value of 10.
3. Select for the star and X using `document.querySelector()`.
4. Attach an event listener to the star. Increase the score by 1 everytime the star is clicked. Print the value to the console.
5. We want to print the final scores and lives to the score and lives containers. Select for the div with a `class=score` and the div with a `class=lives` using `document.querySelector`.
6. Check `if` the score is greater than 10. If the score is less than 10, print the score to the screen using `innerHTML` and `${score}`.  
![](https://media.giphy.com/media/64v03IWNwQOwTkWowj/giphy.gif)
7. Check `if` the lives is greater than 0. If the lives are greater than 0, print the lives to the screen using `innerHTML` and `${lives}`.  
![](https://media.giphy.com/media/Y4q8FL9h3iBydUnSuq/giphy.gif)
8. The entire page has been wrapped in div with an `id = "message"`. Select for this div using `document.querySelector`. 
9. If the score is greater than 10, use .innerHTML on the message div you selected for in step 7 to print a final message to the user telling them they have the new high score.  
![](https://media.giphy.com/media/NB2zoadASgwHHSSBai/giphy.gif)
10. If the lives reach 0, use .innerHTML on the message div you selected for in step 7 to print a final message telling the user that the game is over.  
![](https://media.giphy.com/media/1upn2bYXOKcvIjOO5w/giphy.gif)  
**BONUS**: If you want to style your final game over screen you can add some additional lines using the `<style></style>` tags. These are tags we can use to add style rules inside of HTML. For example, to get a black background for the game over message screen you could do:  
```javascript
messageContainer.innerHTML = `
  <style>
    body {
      background-color:black;
      margin: 100px;
    }
  </style>
  <h1>GAME OVER</h1>`
```
