var fs = require('fs');

var month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');


function getFormattedDate(today) {
    var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var day  = week[today.getDay()];
    var dd   = today.getDate();
    var mm   = month[today.getMonth()]; //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var minu = today.getMinutes();

    if(dd<10)  { dd='0'+dd } 
    if(mm<10)  { mm='0'+mm } 
    if(minu<10){ minu='0'+minu } 

    return mm + " " + dd + " " + yyyy;
}

var datetime = new Date();
var stringDate = getFormattedDate(datetime);

var preDirTag = "C:/Users/PUBLIC/"
var starElectronicsFolder = preDirTag + "Star Electronics/" + month[datetime.getMonth()];
var icblFolder = preDirTag + "ICBL Shift Notes/" + month[datetime.getMonth()];
var thirdEyeFolder = preDirTag + "Third Eye Security Shift Notes/" + month[datetime.getMonth()];
var cssCms = preDirTag + "CSS CMS Shift Notes/" + month[datetime.getMonth()];


var dirs = [starElectronicsFolder, icblFolder, thirdEyeFolder, cssCms];

function createFolder(dirname){
	try{

		if(!fs.existsSync(dirname)) {
			fs.mkdirSync(dirname);
		}
		console.log("Success");
	}

	catch(err) {
		if(err.code == 'EEXIST') {
			console.log("File already exists");
		}

		else {
			console.log(err);
		}
	}
}

function createFolders(dirnames){
		dirnames.forEach(function(dir) {
			if(!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}
		});
		console.log("Success");
	}

	catch(err) {
		if(err.code == 'EEXIST') {
			console.log("Error");
		}

		else {
			console.log(err);
		}
	}
}

function createMonthFolder(){
	starElectronicsFolder += month[datetime.getMonth()];
	icblFolder = preDirTag += month[datetime.getMonth()];
	thirdEyeFolder = preDirTag += month[datetime.getMonth()];
	cssCms += month[datetime.getMonth()];
	
	try{
	dirs.forEach(function(dir) {
		if(!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
	});
	console.log("Success");
}

catch(err) {
	if(err.code == 'EEXIST') {
		console.log("Error");
	}

	else {
		console.log(err);
	}
}
}


try{
	dirs.forEach(function(dir) {
		if(!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
	});
	console.log("Success");
}

catch(err) {
	if(err.code == 'EEXIST') {
		console.log("Error");
	}

	else {
		console.log(err);
	}
}
