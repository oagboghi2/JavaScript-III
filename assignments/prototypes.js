/*
  Object oriented design is commonly used in video games.  For this part of the assignment
  you will be implementing several classes with their correct inheritance heirarchy.

  In this file you will be creating three classes: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your classes.
  
  Each class has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/


function GameObject(attr){
  this.createdAt = attr.createdAt;
  this.dimensions = attr.dimensions;
  this.destroy = function(){
    return `${this.name} was removed from the game.`
  }
}

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

CharacterStats.prototype = Object.create(GameObject.prototype)

function CharacterStats(attr){
  GameObject.call(this, attr);
  this.hp = attr.hp;
  this.name = attr.name;
  };


CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}

var user = new CharacterStats({
  "hp": 100,
  "name":"Master Chief",


})
console.log(user.destroy());
console.log(user.takeDamage());

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
Humanoid.prototype = Object.create(CharacterStats.prototype)

 function Humanoid(attr){
   CharacterStats.call(this, attr),
   this.faction = attr.faction,
   this.weapons = attr.weapons,
   this.language = attr.language,
   this.greet = function(){
     return `${this.name} offers a greeting in ${this.language}.`
   }
 }
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

//Test you work by uncommenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    hp: 5,
    name: 'Bruce',
    faction: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Toungue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    hp: 10,
    name: 'Lilith',
    faction: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.hp); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.faction); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villian and Hero classes that inherit from the Humanoid class.  
  // * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villian and one a hero and fight it out with methods!
function Hero(attr){
  Humanoid.call(this, attr),
  this.special = attr.special
  this.attack = function(){
    
    return `${this.name} has successfully attacked`;
  },
  this.defend = function(){
    this.hp - 100;
    if(`${this.hp}` <= 0){
      return `${this.name} has died`
    }else{
      return `${this.name} was hit` 
    }
  }
}



const Hero1 = new Hero({
  special: "Arrow Storm",
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

function Villain(attr) {
  Humanoid.call(this, attr);
}

const Villain1 = new Hero({
  special: "Shadow Lighting",
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Skeletor',
  faction: 'Leaden Key',
  weapons: [
    'Staff of Thaos',
  ],
  language: 'Common Toungue',
});

console.log(Hero1);
console.log(Hero1.defend());
console.log(Villain1);