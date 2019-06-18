import GameService from './game-service.js'

let _gameService = new GameService()

function draw() {
  let target = _gameService.Target


  document.querySelector("#name").innerHTML = `${target.name}`
  document.querySelector("#health").innerHTML = `${target.health > 0 ? target.health : "Dead"}`
  document.querySelector("#hits").innerHTML = `${target.hits}`
}

//any other private functions you may want

export default class GameController {
  constructor() { draw(); }

  addItemToTarget(itemName) {
    _gameService.addItemToTarget(itemName)
  }

  attackTarget(attackName) {
    _gameService.attackTarget(attackName)
    draw();
  }

  resetGame() {
    _gameService.resetGame()
    draw();
  }

  //any other public methods you may want
}