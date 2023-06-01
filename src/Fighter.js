const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, image, x, y) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.image = image;
    this.x = x;
    this.y = y;
  }

  /**
   * Launch a strike
   * @param {Fighter} defender
   */
  fight(defender) {
    let attackPoints = this.getRandomInt(this.getDamage());
    let damages = Math.max(attackPoints - defender.getDefense(), 0);
    defender.life = Math.max(defender.life - damages, 0);
  }

  /**
   * Calculate the value of the attack
   * @returns {number}
   */
  getDamage() {
    return this.strength;
  }

  /**
   * Calculate the value of the defense
   * @returns {number}
   */
  getDefense() {
    return this.dexterity;
  }

  /**
   * Make a random number between 1 and max
   * @param {number} max
   * @returns {number}
   */
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  /**
   * Check if the fighter is still alive
   * @returns {boolean}
   */
  isAlive() {
    return this.life > 0;
  }
}
