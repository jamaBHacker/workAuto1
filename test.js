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
var starElectronicsFolder = preDirTag + "Star Electronics/"
var icblFolder = preDirTag + "ICBL Shift Notes/";
var thirdEyeFolder = preDirTag + "Third Eye Security Shift Notes/";
var cssCms = preDirTag + "CSS CMS Shift Notes/";


var dirs = [starElectronicsFolder, icblFolder, thirdEyeFolder, cssCms];

//Creates a single folder using string path directory name
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

//creates multiple folders using an array
function createFolders(dirnames){

	dirnames.forEach(function(dir) {
		if(!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
	});
}

//creates multiple folder with the month name in multiple specified folders
function createMonthFolders(dirnames){


	dirnames.forEach(function(dir) {
		dir += month[datetime.getMonth()];
		createFolder(dir);
	});
	
}

function createDayFolders(dirnames) {
	dirnames.forEach(function(dir) {
		dir += month[datetime.getMonth()] + "/" + month[datetime.getMonth()] + " " + datetime.getDate();
		createFolder(dir);
	});
}

function copyFile(sourceFile, targetFile){

	fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
}

//list all directories in a a directory
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}


function copyFiles(source, target) {

	dirs.forEach(function(dir) {

		//copyFile( , dir + month[datetime.getMonth()] );
	});	
}

//get hour of shift to calculate relevant shift number
function getShiftNumber(){
	var hour = datetime.getHours();
	var shiftNumber;

	if( (hour <= 7) && (hour > 23) ) {
		shiftNUmber = 1;
	}

	else if( (hour > 7) && (hour <= 15) ) {
		shiftNumber = 2;
	}

	else if( (hour > 15) && (hour <= 23)) {
		shiftNumber = 3;
	}

	return shiftNumber;
}

createFolders(dirs);
createMonthFolders(dirs);
createDayFolders(dirs);