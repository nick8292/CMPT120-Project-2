var Locations = new Array();
var items = new Array();

function Item()
{
	this.id = -1;
	this.name="";
	this.description = "";
	this.toString = function()
	{
	 return		"Id: " + this.id + "' Name: "+this.name + ", Description: \"" + this.description + "\"";
	}
}

//Location Prototype
function Locale()
{
  this.id = -1;
  this.name = "";
  this.description = "";
  this.item = "";
  this.toString = function ()
  {
	return"Id:"+this.id+", Name: "+this.name+", Description:\""+this.description+"\", Item:"+this.item.toString();
  }
  
 }
 //fill in location prototype
 
 
   location[0] = new Locale();
   location[0].id= 0;
   location[0].name = "Precinct";
   location[0].description = "You are back at the precinct";
   location[0].item = "nothing";
   
   
   location[1] = new Locale();
   location[1].id= 1;
   location[1].name = "South Side of New York City";
   location[1].description = "You have arrived at the south side of New York City.  You have caught a person jaywaking at 3:30 AM. The jaywalker has an illegal firearm on him";
   location[1].item = "gun";
   
   
   location[2] = new Locale();
   location[2].id= 2;
   location[2].name = "North side of New York City";
   location[2].description = "You have arrived at the north side of New York City.  You have caught a robber at a local deli.";
   location[2].item = "nothing";
   
   
   location[3] = new Locale();
   location[3].id= 3;
   location[3].name = "East side of New York City";
   location[3].description = "You have arrived at the east side of New York City.  You have pulled over a twenty-two year old male and found 100 dollars worth of drugs in his trunk.";
   location[3].item = "nothing";
   
   
   location[4] = new Locale();
   location[4].id= 4;
   location[4].name = "West side of New York City";
   location[4].description = "You have arrived at the west side of New York City.  You have caught a theif stealing a purse from an elderly woman. Her keys are still on the sidewalk.";
   location[4].item = "keys";
   
   
   location[5] = new Locale();
   location[5].id= 5;
   location[5].name = "The Bay";
   location[5].description = "You have arrived by the bay and caught a person with a body bag in the trunk of his car";
   location[5].item = "nothing";
   
   
   location[6] = new Locale();
   location[6].id= 6;
   location[6].name = "Jewlery Store";
   location[6].description = "You have caught a robber at a local jewlery store.";
   location[6].item = "nothing";
   
   
   location[7] = new Locale();
   location[7].id= 7;
   location[7].name = "Apartment";
   location[7].description = "You have caught a guy beating his wife in an apartment. There are hancuffs on the ground.";
   location[7].item = "handcuffs";
   
   
   location[8] = new Locale();
   location[8].id= 8;
   location[8].name = "Yankee Stadium";
   location[8].description = "You have caught a person soliciting outside of Yankee stadium.";
   location[8].item = "nothing";
   
   
   location[9] = new Locale();
   location[9].id= 0;
   location[9].name = "Gas Station";
   location[9].description = "You have caught a person trying to rob a local gas station.";
   location[9].item = "nothing";
   
//Item Prototype  
   location[1].item = new Item();
   location[1].item.id= 0;
   location[1].item.name = "Gun";
   location[1].item.description = "You take the gun from him.";
   
   
   location[4].item = new Item();
   location[4].item.id= 0;
   location[4].item.name = "Keys";
   location[4].item.description = "You pick up the keys.";
   
   
   location[7].item = new Item();
   location[7].item.id= 0;
   location[7].item.name = "Handcuffs";
   location[7].item.description = "You pick up the handcuffs.";
   
   
function startingLocation()
{
	var message= "You are a police officer in the middle of New York City.  You work night hours so this is when the most robberies and crimes occur.  Your objective is to catch as many robbers and criminals as possible throughout the night.  You are currently at your precinct awaiting to catch criminals throughout the night.";
	updateDisplay(message);
}
function location0()
	{
		updateDisplay(location[0].description);
		
		   enableSouth();
		   enableEast();
		   enableWest();
		   enableNorth();
		
	}
function location1()
	{
		if (local1 ===0) 
		{
		   addScore();
		   local1 = local1+1;

		}
			updateDisplay(location[1].description);
	 	   disableSouth();
		   disableEast();
		   disableWest();
		   enableNorth();
		
	}
function location2()
	{
		if (local2 ===0) 
		{
		   addScore();
		   local2 = local2+1;
		}
			updateDisplay(location[2].description);
		
			enableSouth();
		   enableEast();
		   enableWest();
		   enableNorth();
	}
function location3()
	{
		if (local3 ===0) 
		{
		   addScore();
		   local3 = local3+1;
		}
			updateDisplay(location[3].description);
		   disableSouth();
		   disableEast();
		   enableWest();
		   enableNorth();
	}
function location4()
	{
		if (local4 ===0) 
		{
		   addScore();
		   local4 = local4+1;
		}
			updateDisplay(location[4].description);
			
		   disableSouth();
		   enableEast();
		   disableWest();
		   enableNorth();
	}
function location5()
	{
		if (local5 ===0) 
		{
		   addScore();
		   local5 = local5+1;
		}
			updateDisplay(location[5].description);
			enableSouth();
		   enableEast();
		   enableWest();
		   disableNorth();
	}	   
	function location6()
	{
		if (local6 ===0) 
		{
		   addScore();
		   local6 = local6+1;
		}
			updateDisplay(location[6].description);
		
			enableSouth();
		   enableEast();
		   disableWest();
		   disableNorth();
	}
function location7()
	{
		if (local7 ===0) 
		{
		   addScore();
		   local7 = local7+1;
		}
			updateDisplay(location[7].description);
			
			enableSouth();
		   enableEast();
		   disableWest();
		   enableNorth();
	}
function location8()
	{
		if (local8 ===0) 
		{
		   addScore();
		   local8 = local8+1;
		}	
			updateDisplay(location[8].description);
		   enableSouth();
		   disableEast();
		   enableWest();
		   disableNorth();
	}
function location9()
	{
		if (local9 ===0) 
		{
		   addScore();
		   local9 = local9+1;
		}
			updateDisplay(location[9].description);
		   enableSouth();
		   disableEast();
		   enableWest();
		   enableNorth();	   
	}