var x = 78
if (x<10) {
	alert("number is less than 10") ;
}
else {
	alert(x + " is greater than 10!") ;
}




function alertName(somePersonsName){
	return alert(somePersonsName);
}
alertName("Samantha");





function someThing (thingOne, otherThing) {
	return thingOne + 10 + otherThing;
}
console.log(someThing(9, 13));





var x = "bottles";
var numBottles = 99;
	while (numBottles > 0) {
		console.log(numBottles + " " + x + " of beer on the wall");
		console.log(numBottles + " " + x + " of beer,");
		console.log("Take one down, pass it around,");
		    
		numBottles = numBottles - 1;
		if (numBottles > 0) {
			console.log(numBottles + " " + x + " of beer on the wall.");
		} else {
		        console.log("No more " + x + " of beer on the wall.");
		    }
		}