export default class Target {
  constructor(name, health, items) {
    this.name = name;
    this.health = health;
    this.items = items;
    this.hits = 0;
  }
}