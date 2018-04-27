function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

//function isEven(num) {
//	return num % 2 === 0;
//}


function factorial(num) {
var result = 1;
for(var i =1; i<=num; i++) {
	result = result*i;
}
}

//function factorial(num) {
//if(num ===o) {
//	return 1;
//}	
//var result = num;
//for(var i=num-1; i>=1; i--) {
//	result *= i;
//}
//{}


function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
}