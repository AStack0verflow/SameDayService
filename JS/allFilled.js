
        // signature: function: allFilled: void -> Boolean
        // purpose: expects nothing, and returns true if the
        //     three textfields with the specified id attributes
        //     have something in them when this is called,
        //     and pops up an explanatory alert box and returns
        //     false if any of the textfields are empty
 
function allFilled()
{
    var param1Field = document.getElementById("recipients");
    var param2Field = document.getElementById("first_name");
    var param3Field = document.getElementById("last_name");
	var param4Field = document.getElementById("tele_num");
	var param5Field = document.getElementById("building"); 
    var param6Field = document.getElementById("room_num");
	var param7Field = document.getElementById("desc_of_prob");
	var param8Field = document.getElementById("Student_id_num");

			
    var val1 = param1Field.value;
	var val12 = val1.length;
	var val2 = param2Field.value;
	var val3 = param3Field.value;
	var val4 = param4Field.value;
	var val5 = param5Field.value;
	var val6 = param6Field.value;	
	var val7 = param7Field.value;
	var val8 = param8Field.value;	
    var result;
	//Check to make sure that all of the fields are filled and that a full student ID has been submitted

	if ((!val1) || (!val2) || (!val3)|| (!val4)|| (!val5)|| (!val6)|| (!val7) || (!val8) || (val5 == " ") || (val12 > 20))
	{
        alert("Please make sure you have filled out your Full name, Student ID Number, Telephone number, Building, Room number, and a Description of your issue. ");
        result = false;
	}
    
	else
	{
		var email = document.getElementById('recipients');
		//Tack on the @humboldt.edu for the students to maintain acceptable email addresses
		var filepath = "http://users.humboldt.edu/ewilliams/csv/text.txt"; // Use this instead
		if (email.value.length > 7)
		{
			email.value = email.value
		}
		else
		{
			email.value = email.value + '@humboldt.edu';
		}
		//alert(email.value);
		result = true;
	}

    return result;
 }
		
function changeText()
{
	// change the text of suggested questions to consider, based on what a general FAQ topic 
	var mytextbox = document.getElementById('help_questions');
    var mydropdown = document.getElementById('issue');
	mytextbox = ' ';
    mydropdown.onchange = 
    document.getElementById('help_questions').value =  this.value; //to appened
    mytextbox.innerHTML = this.value;
}







































