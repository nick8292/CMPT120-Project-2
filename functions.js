var space="\n------------------\n";
var score = 0;	var local1 = 0; var local2 = 0; var local3 = 0; var local4 = 0; var local5 = 0; var local6 = 0; var local7 = 0; var local8 = 0; var local9 = 0 ;
var position=0;
var gun = false;
var handcuffs = false;
var keys = false;
var inventory = "";

function process()
{
	var command="";
	command=document.getElementById("txtCommand").value;
	command= command.toLowerCase();
switch(command)
	{
		case "n" : displayNorth();
					break;
		case "s" : displaySouth();
					break;
		case "e" : displayEast();
					break;
		case "w" : displayWest();
					break;
		case "w" : displayWest();
					break;	
		case "help": displayHelp();
					break;
		case "take": takeItem();
					break;
		case "inventory": displayInventory();
					break;
		default: Error();
}}
		
function displayNorth()
	{
	if (position===0) {
		position=2;
		location2();		
	}	
	else if (position===2) {
		position=5;
		location5();
	}
		else if (position===5) {
		position=5;
		boundry();
	}
		else if (position===1) {
		position=0;
		location0();
	}
		else if (position===3) {
		position=9;
		location9();
	}
		else if (position===4) {
		position=7;
		location7();
	}
		else if (position===6) {
		position=6;
		boundry();
	}
		else if (position===7) {
		position=6;
		location6();
	}
		else if (position===8) {
		position=8;
		boundry();
	}
		else if (position===9) {
		position=8;
		location8();	
	}
	}
	
		
function displaySouth()
	{
     	if (position===0) {
		position=1;
		location1();		
	}	
	else if (position===1) {
		position=1;
		boundry();
	}
		else if (position===2) {
		position=0;
		location0();
	}
		else if (position===3) {
		position=3;
		boundry();
	}
		else if (position===4) {
		position=4;
		boundry();
	}
		else if (position===5) {
		position=2;
		location2();
	}	
		else if (position===6) {
		position=7;
		location7();
	}
		else if (position===7) {
		position=4;
		location4();
	}
		else if (position===8) {
		position=9;
		location9();
	}
		else if (position===9) {
		position=3;
		location3();
	}
	
	}
		
function displayEast()
	{
		if (position===0) {
		position=3;
		location3();
		}
		else if (position===1) {
		position=1;
		boundry();
		
		}
		else if (position===2) {
		position=9;
		location9();
		}
		else if (position===5) {
		position=8;
		location8();
		}
		else if (position===4) {
		position=0;
		location0();
		}
		else if (position===3) {
		position=3;
		boundry();
		}
		else if (position===6) {
		position=5;
		location5();
	}
		else if (position===7) {
		position=2;
		location2();
	}
		else if (position===8) {
		position=8;
		boundry();
	}
		else if (position===9) {
		position=9;
		boundry();
	}
	}
	
function displayWest()
	{
		if (position===0) {
		position=4;
		location4();
		}
		else if (position===1) {
		position=1;
		boundry();
		}
		else if (position===2) {
		position=7;
		location7();
		
		}
		else if (position===3) {
		position=0;
		location0();
		}
		else if (position===4) {
		position=4;
		boundry();
		}
		else if (position===5) {
		position=6;
		location6();
		
		}		
		else if (position===6) {
		position=6;
		boundry();
	}
		else if (position===7) {
		position=7;
		location0();
	}
		else if (position===8) {
		position=5;
		location5();
	}
		else if (position===9) {
		position=2;
		location2();
	}
	}
	
function takeItem()
	{
	 if (position===1) {
	   if(!gun)
	   {
		gun = true;
		inventory = inventory + "gun, ";
		updateDisplay("You take the gun from him");
	   }
	} 
	else if (position===4) {
	   if(!keys)
	   {
		keys = true;
		inventory = inventory + "keys, ";
		updateDisplay("You pick up the keys");
	   }
	} 
	else if (position===7) {
	   if(!handcuffs)
	   {
		handcuffs = true;
		inventory = inventory + "handcuffs, ";
		updateDisplay("You pick up the handcuffs");
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
		var message = inventory;
				updateDisplay(message);
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