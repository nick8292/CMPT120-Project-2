function startingLocation()
{
	var message= "You are a police officer in the middle of New York City.  You work night hours so this is when the most robberies and crimes occur.  Your objective is to catch as many robbers and criminals as possible throughout the night.  You are currently at your precinct awaiting to catch criminals throughout the night.";
	updateDisplay(message);
}
function location0()
	{
		var message = "You are back at the precinct";
		updateDisplay(message);
		
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
			if(!gun)
			{	
				var message = "You have arrived at the south side of New York City.  You have caught a person jaywaking at 3:30 AM. The jaywalker has an illegal firearm on him";
				updateDisplay(message);
			}
			else if(gun ===true)
			{
				var message = "You have arrived at the south side of New York City." ;
				updateDisplay(message);	
			}
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
		var message = "You have arrived at the north side of New York City.  You have caught a robber at a local deli.";
		updateDisplay(message);
		
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
		var message = "You have arrived at the east side of New York City.  You have pulled over a twenty-two year old male and found 100 dollars worth of drugs in his trunk.";
		updateDisplay(message);
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
			if(!keys)
			{
				var message = "You have arrived at the west side of New York City.  You have caught a theif stealing a purse from an elderly woman. Her keys are still on the sidewalk";
				updateDisplay(message);
			}
			else if(keys === true)
			{
				var message = "You have arrived at the west side of New York City.";
				updateDisplay(message);
			}
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
		var message = "You have arrived by the bay and caught a person with a body bag in the trunk of his car.";
		updateDisplay(message);
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
		var message = "You have caught a robber at a local jewlery store.";
		updateDisplay(message);
		
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
			if (!handcuffs)
			{
				var message = "You have caught a guy beating his wife in an apartment. There are hancuffs on the ground.";
				updateDisplay(message);
			}
			else if (handcuffs===true)
			{
				var message = "You are back at the apartment.";
				updateDisplay(message);	
			}
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
		var message = "You have caught a person soliciting outside of Yankee stadium.";
		updateDisplay(message);
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
		var message = "You have caught a person trying to rob a local gas station.";
		updateDisplay(message);
		   enableSouth();
		   disableEast();
		   enableWest();
		   enableNorth();	   
	}