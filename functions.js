var space="\n------------------\n";
var score = 0;	var local1 = 0; var local2 = 0; var local3 = 0; var local4 = 0; var local5 = 0; var local6 = 0; var local7 = 0; var local8 = 0; var local9 = 0 ;
var position=0;
var gun = false;
var handcuffs = false;
var keys = false;
var inventory = new Array;
var north = 0;
var south = 1;
var east  = 2;
var west  = 3; 
					//   N  S  E  W
		var nav = [
						[2, 1, 3, 4], //location 0
						[0, -1,-2, -3], //location 1
						[5, 0, 3, 4], //location 2
						[9, -4, -5, 0], //location 3
						[7, -6, 0, -7], //location 4
						[-8, 2, 8, 6], //location 5
						[-9, 7, 5, -10], //location 6
						[6, 4, 2, -11], //location 7
						[-12, 9, -13, 5], //location 8
						[8, 3, -14, 2], //location 9
					];
					
function process()
{
	var command="";
	command=document.getElementById("txtCommand").value;
	command= command.toLowerCase();
switch(command)
	{
		case "n" : col = 0;
					break;
		case "s" : col = 1;
					break;
		case "e" : col = 2;
					break;
		case "w" : col = 3;
					break;
		case "i": displayInventory();
					break;			
		case "score": displayScore();
					break;
		case "help": displayHelp();
					break;
		case "take": takeItem();
					break;
		default: Error();
		row = location;
		return nav [row][col];
		
	}

		row = position;
		newLocale = nav[row][col];
		position =newLocale;

	if (position===0) {		
		location0();		
	}	
	else if (position===1) {		
		location1();
	}
		else if (position===2) {
		location2();
	}
		else if (position===3) {
		location3();
	}
		else if (position===4) {
		location4();
	}
		else if (position===5) {
		location5();
	}
		else if (position===6) {
		location6();
	}
		else if (position===7) {
		location7();
	}
		else if (position===8) {
		location8();
	}
		else if (position===9) {
		location9();	
	}
		else if (position===-1)	{
		position = 1;	
		boundry();
	}
		else if (position===-2)	{
		boundry();
		position = 1;
	}

		else if (position===-3)	{
		boundry();
		position = 1;
	}
		else if (position===-4)	{
		boundry();
		position = 3;
	}
		else if (position===-5)	{
		boundry();
		position = 3;
	}
		else if (position===-6)	{
		boundry();
		position = 4;
	}
		else if (position===-7)	{
		boundry();
		position = 4;
	}
		else if (position===-8)	{
		boundry();
		position = 5;
	}
		else if (position===-9)	{
		boundry();
		position = 6;		
	}
		else if (position===-10)	{
		boundry();
		position = 6;
		
	}
		else if (position===-11)	{
		boundry();
		position = 7;
		
	}
		else if (position===-12)	{
		boundry();
		position = 8;
			
	}
		else if (position===-13)	{
		boundry();
		position = 8;
		
	}
		else if (position===-14)	{
		boundry();
		position = 9;
		
	}	
	//clears the textbox.
		var inputTxtBox = document.getElementById('txtCommand');
		inputTxtBox.value = "";

	}
	
	function inputTxt(newTxt)
	{
		var inputTxtBox = document.getElementById("txtCommand");
		inputTxtBox.value = newTxt + inputTxtBox.value;
	}
	
		
function travelNorth()
{
	var message = "n";
	inputTxt (message);
	process();
}

function travelSouth()
{
	var message = "s";
	inputTxt (message);
	process();
}

function travelEast()
{
	var message = "e";
	inputTxt (message);
	process();
}

function travelWest()
{
	var message = "w";
	inputTxt (message);
	process();
}

	
function takeItem()
	{
	 if (position===1) {
	   if(!gun)
	   {
		gun = true;
		inventory[0] = "gun, ";
		updateDisplay(location[1].item.description);
	   }
	} 
	else if (position===4) {
	   if(!keys)
	   {
		keys = true;
		inventory[0] = "keys, ";
		updateDisplay(location[4].item.description);
	   }
	} 
	else if (position===7) {
	   if(!handcuffs)
	   {
		handcuffs = true;
		inventory[0] = "handcuffs, ";
		updateDisplay(location[7].item.description);
	   }
	}  	
	 
	 
	}
		
	function addScore()
	{
		score = score + 5;

	}	
	function displayScore()
	{
	var message = score;
		updateDisplay(message);
	}

function Error()
{
		var message = "That is not a valid command.  Valid commands a n,s,e,w.";
				updateDisplay (message);
}

function boundry()
{
		var message = "Can't go this way";
				updateDisplay (message);
}

function displayHelp()
{
		var message = "Type n to go north, s to go south, w to go west, and e to go east.";
				updateDisplay (message);
}
function displayInventory()
{
	
				updateDisplay(inventory);
}				
function updateDisplay(updatedText)
{
	var TextBox=document.getElementById("Gametext");
	TextBox.value=updatedText+space+TextBox.value+space;
}

function disableNorth()
{
    document.getElementById("northButton").disabled = true;
}

function disableSouth()
{
    document.getElementById("southButton").disabled = true;
}

function disableWest()
{
    document.getElementById("westButton").disabled = true;
}

function disableEast()
{
    document.getElementById("eastButton").disabled = true;
}

function enableNorth()
{
    document.getElementById("northButton").disabled = false;
}
function enableSouth()
{
    document.getElementById("southButton").disabled = false;
}

function enableWest()
{
    document.getElementById("westButton").disabled = false;
}

function enableEast()
{
    document.getElementById("eastButton").disabled = false;
}