// Write your JS here
const myHero = {};

const hero = {
  name: "Bria",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Shield", damage: 2 }
};

const dagger = { type: "dagger", damage: 2 };

function rest(person) {
  if (person.health !== 10) {
    person.health = 10;
  } else {
    alert("Your health is already at 10");
  }
  return person;
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}

function equipWeapon(person) {
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
  }
}
