var ctype = [
	"Mental or physical handicap",
	"Sensory impaired",
	"Cultural context",
	"Religious",
	"Socioeconomic",
	"Criminal status",
	"language barrier",
	"identity / expression"
];

function code1() {
	var randomNumber = Math.floor(Math.random() * 8);
	document.getElementById("codetype").innerHTML = ctype[randomNumber];
}

var cimg = [
	"invasive procedure",
	"patient / family education",
	"two",
	"three",
	"four",
	"five",
	"six",
	"more than six"
];

function code2() {
	var randomNumber = Math.floor(Math.random() * 8);
	document.getElementById("codeimgs").innerHTML = cimg[randomNumber];
}

var cinclude = [
	"tabs",
	"toggle",
	"animation",
	"hover",
	"2 fonts",
	"3 fonts",
	"no mix blend modes"
];

function code3() {
	var randomNumber = Math.floor(Math.random() * 7);
	document.getElementById("mustinclude").innerHTML = cinclude[randomNumber];
}

var cfont = [
	"Standardized Patient",
	"Hi-Fi Simulator",
	"Lo-Fi Simulator",
	"Task Trainer / Procedural Trainer",
	"Telemed",
	"Tabletop / Lecture / Case Study",
	"Mass Casualty / Triage"
];

function code4() {
	var randomNumber = Math.floor(Math.random() * 7);
	document.getElementById("fontideas").innerHTML = cfont[randomNumber];
}

const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

const secondNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

