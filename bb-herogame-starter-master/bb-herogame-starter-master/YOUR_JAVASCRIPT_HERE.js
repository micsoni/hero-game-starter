// Write your JS here
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
  document.getElementById("youPickedIt").innerHTML =
    "You have a " + weapon.type + " now!";
  person.inventory.push(weapon);
  return weapon;
}

function equipWeapon(person) {
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
    displayStats(person);
  }
}

function chooseHeroName(person) {
  var heroName = prompt("Please enter your hero name", "");

  if (heroName != null && heroName.length < 30) {
    person.name = heroName;
    displayStats(person);
  } else if (heroName != null && heroName.length > 30) {
    alert("Your name is too long, try again");
  }
  return heroName;
}

function displayStats(person) {
  document.getElementById("heroStats").innerHTML = "";
  var characteristics = document.createElement("p");
  characteristics.innerHTML = `
    <ul>
      <li>Name: ${person.name}</li>
      <li>Health: ${person.health}</li>
      <li>Weapon type: ${person.weapon.type}</li>
      <li>Weapon damage: ${person.weapon.damage}</li>
    </ul>`;
  document.getElementById("heroStats").appendChild(characteristics);
}

displayStats(hero);
