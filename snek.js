export const SNAKE_SPEED = 5;

export const snakeBody = [
    {x: 10, y: 11} //0
]

export function drawSnake(gameBoard) {
    snakeBody.forEach(element => {
        const snakeElement = document.createElement("div"); //creates a div for each piece of the body
        snakeElement.style.gridColumnStart = element.x; //assigns it the right x
        snakeElement.style.gridRowStart = element.y; //assigns it the right y
        snakeElement.classList.add("snek"); //assigns it proper style
        gameBoard.appendChild(snakeElement); //add the freshly created div to the gameBoard (#game-grid)
    });
}

export function updateSnake(gameBoard) {
    for (let i = snakeBody.length - 2; i >= 0; i--) { //the loop starts from the end of the snake and moves forward
        snakeBody[i + 1] = { ...snakeBody[i] }; //curly braces creates a new object to avoid a bug
    }
    move(); //responds to player input
    snakeBody[0].x += inputDirection.x; //affects player input x2
    snakeBody[0].y += inputDirection.y;

    if (snakeBody[0].x < 0 || snakeBody[0].x > 21 || snakeBody[0].y < 0 || snakeBody[0].y > 21) {
        //|| snakeBody[0].x == snakeBody.x.values()
        window.location.reload();
    }

    for (let j = snakeBody.length - 1; j > 0; j--) { //loop to detect if snake bites tail
        if (snakeBody[0].x == snakeBody[j].x && snakeBody[0].y == snakeBody[j].y) {
            alert("snek ate snek");
            window.location.reload();
        }
    }
}

let inputDirection = {x: 0, y: 0};
let lastInputDirection = {x: 0, y: 0};

function move() {
    addEventListener("keydown", keypress); //no need to use brackets following the function parameter
}

function keypress() {
    if (event.key === "ArrowUp" && lastInputDirection.y !== 1) {
        inputDirection = {x: 0, y: -1};
    }
    if (event.key === "ArrowDown" && lastInputDirection.y !== -1) {
        inputDirection = {x: 0, y: 1};
    }
    if (event.key === "ArrowLeft" && lastInputDirection.x !== 1) {
        inputDirection = {x: -1, y: 0};
    }
    if (event.key === "ArrowRight" && lastInputDirection.x !== -1) {
        inputDirection = {x: 1, y: 0};
    }
    lastInputDirection = inputDirection;
}