// FizzBuzz JS code

var currentNumber = 0;

for(var i = 0; i < 20; i++) {
	//increment current number by 1
    currentNumber = currentNumber + 1;
	//check if current number is divisible by 3 and 5
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
	//if current number is divisible by 3 and 5 then display word fizzbuzz on consolee
    console.log ("FizzBuzz");
		//check if current number is divisible by 3
	} else  if (currentNumber % 3 === 0) {
		//if current number is divisible by 3 display word fizz on console
		console.log ("Fizz");
		//check if current number is divisible by 5
	} else if (currentNumber % 5 === 0){
		//if current number is divisible by 5 then display word buzz on console
		console.log ("Buzz");
	} else {
		//for all other numbers simply display the number on console
		console.log (currentNumber);
	}
}
