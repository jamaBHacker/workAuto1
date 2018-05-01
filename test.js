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

function copyFile(sourceFile, targetFile){

	fs.writeFileSync(targetFile, fs.readFileSync(sourceFile));
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

var item;  //Used to get previous folder name since function findPrevFolder is returning an undefined value
function findPrevFolder(dirname){

	var list = getDirectories(dirname); 


	list.forEach(function(listitem) {
		var prev = datetime.getDate() - 1;
		var temp = listitem.search( month[datetime.getMonth()] + " " + prev );


		if( temp != -1 ){
			item = listitem;
		}
	});

}

function copyFiles(source, target) {

	dirs.forEach(function(dir) {
		var prev = findPrevFolder(dir + month[datetime.getMonth()] + '/');

		copyFile( , dir + month[datetime.getMonth()] );
	});	
}


function getShiftNumber(){
	var hour = datetime.getHours();
	var shiftNUmber;

	if( (hour <= 7) && (hour > 23) ) {
		shiftNUmber = 1;
	}

	if( (hour > 7) && (hour <= 15) ) {
		shiftNUmber = 2;
	}

	if( (hour > 15) && (hour <= 23)) {
		shiftNUmber = 3
	}

	return shiftNUmber;
}


var to = 'C:/'

copyFiles(from, )