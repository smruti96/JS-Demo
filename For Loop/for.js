console.log("ALL NUMBERS BETWEEN -10 TO 19");
for(i = -10; i<20; i++) {
	console.log(i);
}

console.log("ALL EVEN NUMBERS BETWEEN 10 TO 40");
for(i = 10; i<41; i+=1) {
	console.log(i);
}

console.log("ALL ODD NUMBERS BETWEEN 300 TO 333");
for(i = 300; i<=333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 TO 50");
for(i = 5; i<51; i++) {
	if((i % 5 === 0) && (i % 3 === 0)) {
		console.log(i);
	}
}