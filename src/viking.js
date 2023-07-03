// Soldier
class Soldier {
  health
  strength

  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health = this.health - damage
  }
}

// Viking
class Viking extends Soldier {
  name
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health >= 0) {
      console.log(`${this.name} has received ${damage}.`)
    } else {
      console.log(`${this.name} has died in act of combat.`)
    }
  }

  battleCry() {
    console.log('Odin Owns You All')
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage

    if (this.health >= 0) {
      console.log(`A Saxon has received ${damage} points of damage.`)
    } else {
      console.log(`A Saxon has died in act of combat.`)
    }
  }
}

// War
class War {
  vikingArmy
  saxonArmy

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy = [...this.vikingArmy, viking]
  }

  addSaxon(saxon) {
    this.saxonArmy = [...this.saxonArmy, saxon]
  }

  attack(army1, army2) {
    const randomArmy1 = Math.floor(Math.random() * army1.length)
    const randomArmy2 = Math.floor(Math.random() * army2.length)

    return army2
      .map((soldier, index) => {
        if (index === randomArmy2) {
          soldier.receiveDamage(army1[randomArmy1].strength)

          if (soldier.health <= 0) {
            return null
          }
        }

        return soldier
      })
      .filter((soldier) => soldier !== null)
  }

  vikingAttack() {
    /* Bonus 5:

    this.saxonArmy = this.attack(this.vikingArmy, this.saxonArmy)
    
  */
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    this.saxonArmy = this.saxonArmy
      .map((saxon, index) => {
        if (index === randomSaxon) {
          saxon.receiveDamage(this.vikingArmy[randomViking].strength)

          if (saxon.health <= 0) {
            return null
          }
        }

        return saxon
      })
      .filter((saxon) => saxon !== null)
  }

  saxonAttack() {
    /* Bonus 5:

    this.vikingArmy = this.attack(this.saxonArmy, this.vikingArmy)

     */
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    this.vikingArmy = this.vikingArmy
      .map((viking, index) => {
        if (index === randomViking) {
          viking.receiveDamage(this.saxonArmy[randomSaxon].strength)

          if (viking.health <= 0) {
            return null
          }
        }

        return viking
      })
      .filter((viking) => viking !== null)
  }

  showStatus() {
    const saxonArmyExist = this.saxonArmy.length > 0
    const vikingArmyExist = this.vikingArmy.length > 0

    if (saxonArmyExist && vikingArmyExist) {
      console.log('Vikings and Saxons are still in the thick of battle.')
    } else if (!vikingArmyExist) {
      console.log('Saxons have fought for their lives and survived another day...')
    } else {
      console.log('Vikings have won the war of the century!')
    }
  }
}
