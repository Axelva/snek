import { snakeBody } from "./snek.js";

export let food = randomizeLocation();

export function drawFood(gameBoard) {
    let foodElement = document.createElement("div"); //div creation but it isn't added to the HTML
    foodElement.style.gridColumnStart = food.x; //pulls x location from const to grid
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement); //div is now added to the HTML, to its parent : game-grid
}

export function randomizeLocation() {
    return {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}

export function foodBecomesSnake() {
    food = randomizeLocation(); //then change food location randomly
    snakeBody.push({x: -1, y: -1}); //to add a snake piece. Empty array doesn't work. updateSnake() then adds it to the right location
}