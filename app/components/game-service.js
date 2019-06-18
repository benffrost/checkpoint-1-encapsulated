import Target from '../models/target.js'
import Item from '../models/items.js'

let _target = new Target("Alien", 100, []);

let cleats = new Item("Cleats", 2, "pointy")
let boomerang = new Item("Boomerang", 1.5, "returny")
let sword = new Item("Sword", 3, "edgy")

let _items = { cleats: cleats, boomerang: boomerang, sword: sword } //create and add as many items as you like

function addMods(target) {

  let output = 1;
  for (let i in target.items) {
    output *= target.items[i].modifier;
  }
  return output;
}


export default class GameService {
  constructor() { }

  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      items: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemName) {
    _target.items.push(_items[itemName])
  }

  attackTarget(attackName) {
    let totalMods = addMods(_target);
    let baseAttack = 1;
    switch (attackName) {
      case "slap":
        break;
      case "punch":
        baseAttack = 3;
        break;
      case "kick":
        baseAttack = 10;
        break;
    }

    _target.health -= totalMods * baseAttack;
    _target.hits++;
  }

  resetGame() {
    _target.health = 100;
    _target.hits = 0;
    _target.items = [];
  }
}

  //any other methods you might want on your service
