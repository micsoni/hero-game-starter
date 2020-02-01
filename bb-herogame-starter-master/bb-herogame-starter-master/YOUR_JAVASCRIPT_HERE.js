// Write your JS here

//global variables
const hero = {
  name: "Bria",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Shield", damage: 2 }
};

const dagger = { type: "dagger", damage: 2 };

//function rest
function rest(person) {
  if (person.health !== 10) {
    person.health = 10;
  } else {
    alert("Your health is already at 10");
  }
  return person;
}

//function pick up item
function pickUpItem(person, weapon) {
  document.getElementById("youPickedIt").innerHTML =
    "You have a " + weapon.type + " now!";
  person.inventory.push(weapon);
  return weapon;
}

//function equip weapon and update the stats
function equipWeapon(person) {
  if (person.inventory.length !== 0) {
    person.weapon = person.inventory[0];
    displayStats(person);
  }
}

// function to choose hero name, display it and update de name on stats
function chooseHeroName(person) {
  const heroName = prompt("Please enter your hero name", "");

  if (heroName != null && heroName.length < 30) {
    person.name = heroName;
    document.getElementById("superHeroName").innerText = "";
    document.getElementById("superHeroName").innerText = heroName;
    displayStats(person);
  } else if (heroName != null && heroName.length > 30) {
    alert("Your name is too long, try again");
  }
  return heroName;
}

//function to display the stats
function displayStats(person) {
  document.getElementById("heroStats").innerHTML = "";
  const characteristics = document.createElement("p");
  characteristics.innerHTML = `
    <ul>
      <li>Name: ${person.name}</li>
      <li>Health: ${person.health}</li>
      <li>Weapon type: ${person.weapon.type}</li>
      <li>Weapon damage: ${person.weapon.damage}</li>
    </ul>`;
  document.getElementById("heroStats").appendChild(characteristics);
}

//function to see your enemy
function seeEnemy() {
  document.getElementById("seeEnemy").innerHTML = "";
  const enemy = document.createElement("div");
  enemy.innerHTML = `
  <div>
    <img id="ArchEnemy" onclick="fightAnEnemy()"  src="images/cucumber.png" /> 
  <h2 id="myEnemy" onclick="deleteEnemy()"> The Cucumber</h2>
  </div>`;
  document.getElementById("seeEnemy").appendChild(enemy);
  return enemy;
}

//Function to fight an enemy
function fightAnEnemy() {
  const cucumber = document.getElementById("ArchEnemy");
  cucumber.src = "images/explosion.png";
  cucumber.onclick = function() {
    cucumber.src = "images/cat.png";
  };
}

//Function to delete enemy
function deleteEnemy() {
  const holeDiv = document.getElementById("myEnemy");
  holeDiv.innerHTML = "";
}

displayStats(hero);
