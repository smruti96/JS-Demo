console.log("ALL NUMBERS BETWEEN -10 TO 19");
var x = -10;
while (x<=19) {
console.log(x);
x++;
}

console.log("ALL EVEN NUMBERS BETWEEN 10 TO 40");
var x = 10;
while (x<=40) {
console.log(x);
x+=1;
}

console.log("ALL ODD NUMBERS BETWEEN 300 TO 333");
var x = 300;
while (x<334) {
	if (x % 2 !== 0) {
		console.log(x);
		x++;
	}
}

console.log("ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 TO 50");
var x = 5;
while (x<=50) {
	if ((x % 5 === 0) && (x % 3 === 0)) {
		console.log(x);
	}
x++	
}