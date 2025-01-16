let number = prompt("please enter a number:- ");
// let number = 153;
let digits = number.toString(); // .split() //.map(Number);
let digit_no = digits.length;
// let digitn = digits.valueOf();
let arr = [];

for (let i = 0; i < digit_no; i++) {
	let digit = Number(digits[i]);
	let val = Math.pow(digit, digit_no);
	arr.push(val);
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
if (number == sum) {
	console.log(`${number} its a amstrong number`);
} else {
	console.log(`${number} its not a amstrong number`);
}
