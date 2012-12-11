var space="\n------------------\n";
var score = 0;	var local1 = 0; var local2 = 0; var local3 = 0; var local4 = 0; var local5 = 0; var local6 = 0; var local7 = 0; var local8 = 0; var local9 = 0 ;
var position=0;
var gun = false;
var handcuffs = false;
var keys = false;
var drugs = false;
var inventory = new Array;
var north = 0;
var south = 1;
var east  = 2;
var west  = 3; 
					//   N  S  E  W
		var nav = [
						[2, 1, 3, 4], //location 0
						[0, -1,-1, -1], //location 1
						[5, 0, 3, 7], //location 2
						[9, -3, -3, 0], //location 3
						[7, -4, 0, -4], //location 4
						[-5, 2, 8, 6], //location 5
						[-6, 7, 5, -6], //location 6
						[6, 4, 2, -7], //location 7
						[-8, 9, -8, 5], //location 8
						[8, 3, -9, 2], //location 9
					];

function process()
{
	var command="";
	command=document.getElementById("txtCommand").value;
	command= command.toLowerCase();
	    
  if(command == "n" || command == "s" ||
     command == "e" || command == "w")   
     { 
  switch (command)
     {
          case "n": col = north;
                    break;
          case "s": col = south;
                    break;
          case "e": col = east;
                    break;
          case "w": col = west;
                    break;
          default: displayError();
    } 
     
     clearTxtBox();
    //Makes current_position equal to the row in the array    
    var row = position;
    tempLocale = nav[row][col];

	


	if (tempLocale===0) {		
		location0();
		position = tempLocale;
				
	}	
	else if (tempLocale===1) {		
		location1();
		position = tempLocale;
	}
		else if (tempLocale===2) {
		location2();
		position = tempLocale;
	}
		else if (tempLocale===3) {
		location3();
		position = tempLocale;
	}
		else if (tempLocale===4) {
		location4();
		position = tempLocale;
	}
		else if (tempLocale===5) {
		location5();
		position = tempLocale;
	}
		else if (tempLocale===6) {
		location6();
		position = tempLocale;
	}
		else if (tempLocale===7) {
		location7();
		position = tempLocale;
	}
		else if (tempLocale===8) {
		location8();
		position = tempLocale;
	}
		else if (tempLocale===9) {
		location9();
		position = tempLocale;	
	}
		else if (tempLocale===-1)	{	
		boundry();
		position = 1;
	}
		else if (tempLocale===-2)	{
		boundry();
		position = 2;
	}

		else if (tempLocale===-3)	{
		boundry();
		position = 3;
	}
		else if (tempLocale===-4)	{
		boundry();
		position = 4;
	}
		else if (tempLocale===-5)	{
		boundry();
		position = 5;
	}
		else if (tempLocale===-6)	{
		boundry();
		position = 6;
	}
		else if (tempLocale===-7)	{
		boundry();
		position = 7;
	}
		else if (tempLocale===-8)	{
		boundry();
		position = 8;
	}
		else if (tempLocale===-9)	{
		boundry();
		position = 9;		
	}
	
}	
	
else
{
  switch(command)
  {
          case "i":displayInventory();
                    break;
          case "score":displayScore();
                    break;
          case "help":displayHelp();
                    break;
          case "take": takeItem();
                    break;
          default: Error();          
  }
    clearTxtBox();
 }	

}

function inputTxt(newTxt)
{
		var inputTxtBox = document.getElementById("txtCommand");
		inputTxtBox.value = newTxt + inputTxtBox.value;
}

function clearTxtBox()
{
	//clears the textbox.
		var inputTxtBox = document.getElementById('txtCommand');
		inputTxtBox.value = "";

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
		inventory[0] = "gun";
		updateDisplay(location[1].item.description);
	   }
	} 
	else if (position===4) {
	   if(!keys)
	   {
		keys = true;
		inventory[1] = "keys";
		updateDisplay(location[4].item.description);
	   }
	}
	else if (position===7) {
	   if(!handcuffs)
	   {
		handcuffs = true;
		inventory[2] = "handcuffs";
		updateDisplay(location[7].item.description);
	   }
	} 
	else if (position===3) {
	if (!drugs)
	{
    drugs = true;
    inventory[3] = "drugs";
    updateDisplay(location[3].item.description);
   }
  }	 	
  else
  {
    var message = "There is no item to take";
    updateDisplay(message);
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
               
function winner()
{
  if ( gun === true  &&
       drugs === true &&
       keys === true  &&
       handcuffs === true)   
  {
        var message = "You are a great cop and have solved some crimes tonight. You can go home for the night. The Game is over YOU WON!";
        updateDisplay(message);
        disableGo();
        disableSouth();
		    disableEast();
		    disableWest();
		    disableNorth();
    }
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
function disableGo()
{
  document.getElementById("btnGo").disabled = true;
}