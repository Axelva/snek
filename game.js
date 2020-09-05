import { drawSnake, updateSnake, SNAKE_SPEED, snakeBody } from "./snek.js";
import { updateFood, drawFood, food } from "./food.js";

const gameBoard = document.getElementById("game-grid");
let lastRenderTime = 0;
let POINTS = 0;

function main(currentTime) {
    window.requestAnimationFrame(main); //calls a function when it's time to update the animation for the next repaint.
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //divided by 1000 to go from ms to s
    if (secondsSinceLastRender > 1 / SNAKE_SPEED) {
        console.log("Render");
        lastRenderTime = currentTime;
        //for each RENDER, the following code runs once:
        draw();
        update();
    }
}

window.requestAnimationFrame(main);

function update() {
    updateSnake(gameBoard);
    if (food.x == snakeBody[0].x && food.y == snakeBody[0].y) { //if the food and the snake head are on the same spot
        updateFood(); //then change food location randomly
        POINTS += 1;
        snakeBody.push({x: -1, y: -1}); //to add a snake piece. Empty array doesn't work. updateSnake() adds in to the right location
    }
}

function draw() {
    console.log("Draw");
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}