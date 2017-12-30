<<<<<<< HEAD
let snake = undefined;
let food = undefined;
let numberOfRows = 60;
let numberOfCols = 120;
=======
let game=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
>>>>>>> 94f760894f342f35e3263dfd45089f113c035675

let animator = undefined;

<<<<<<< HEAD
const updateScore = function() {
  let scoreBox = document.getElementById("score").innerText++;
  return scoreBox;
}

const animateSnake = function() {
  let oldHead = snake.getHead();
  let oldTail = snake.move();
  let head = snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  if (head.isSameCoordAs(food)) {
    snake.grow();
    updateScore();
    score.innerText
    createFood(numberOfRows, numberOfCols);
    drawFood(food);
=======
const animateSnake=function() {
  let details=game.move();
  paintBody(details.oldHead);
  unpaintSnake(details.oldTail);
  paintHead(details.head);
  if(game.hasSnakeEatenFood()) {
    game.grow();
    game.createFood();
    drawFood(game.getFood());
>>>>>>> 94f760894f342f35e3263dfd45089f113c035675
  }
}

const changeSnakeDirection = function(event) {
  switch (event.code) {
    case "KeyA":
      game.turnLeft();
      break;
    case "KeyD":
      game.turnRight();
      break;
    case "KeyC":
      game.grow();
      break;
    default:
  }
}

const addKeyListener = function() {
  let grid = document.getElementById("keys");
  grid.onkeyup = changeSnakeDirection;
  grid.focus();
}

const createSnake = function() {
  let tail = new Position(12, 10, "east");
  let body = [];
  body.push(tail);
  body.push(tail.next());
  let head = tail.next().next();

<<<<<<< HEAD
  snake = new Snake(head, body);
=======
  snake=new Snake(head,body);
  game.addSnake(snake);
>>>>>>> 94f760894f342f35e3263dfd45089f113c035675
}

const createFood = function(numberOfRows, numberOfCols) {
  food = generateRandomPosition(numberOfCols, numberOfRows);
}

<<<<<<< HEAD
const startGame = function() {
  createSnake();
  drawGrids(numberOfRows, numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows, numberOfCols);
  drawFood(food);
=======
const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight);
}

const startGame=function() {
  createGame();
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
>>>>>>> 94f760894f342f35e3263dfd45089f113c035675
  addKeyListener();
  animator = setInterval(animateSnake, 140);
}


window.onload = startGame;
