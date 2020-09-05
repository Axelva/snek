export const food = {x: 2, y: 6};

export function drawFood(gameBoard) {
    let foodElement = document.createElement("div"); //div creation but it isn't added to the HTML
    foodElement.style.gridColumnStart = food.x; //pulls x location from const to grid
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement); //div is now added to the HTML, to its parent : game-grid
}

export function updateFood() {
        food.x = Math.floor(Math.random() * 21) + 1;
        food.y = Math.floor(Math.random() * 21) + 1;
}