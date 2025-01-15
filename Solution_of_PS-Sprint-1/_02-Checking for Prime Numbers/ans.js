let userInput = prompt("Please enter a number:");
userInput = Number(userInput);

let prime = true;

if (userInput < 2) {
	prime = false;
}
for (let i = 2; i < userInput; i++) {
	if (userInput % i === 0) {
		prime = false;
        break;
	}
}
if (prime) {
	console.log(userInput + " is a prime number.");
} else {
	console.log(userInput + " is not a prime number.");
}
