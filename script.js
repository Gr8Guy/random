var ctype = [
	"Standardized Patient",
	"Hi-Fi Simulator",
	"Lo-Fi Simulator",
	"Task Trainer / Procedural Trainer",
	"Telemed",
	"Tabletop / Lecture / Case Study",
	"Mass Casualty / Triage"
];

function code1() {
	var randomNumber = Math.floor(Math.random() * 9);
	document.getElementById("codetype").innerHTML = ctype[randomNumber];
}

var cimg = [
	"zero",
	"one",
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
	var randomNumber = Math.floor(Math.random() * 10);
	document.getElementById("fontideas").innerHTML = cfont[randomNumber];
}
