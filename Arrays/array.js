function printReverse(arr){
	for(var i = arr.length-1, i>=0, i--) {
		console.log(arr[i]);
	}
}
printReverse([2,5,6,8]);

function isUniform(arr){
	var first = arr[0];
	for(i=1, i<arr.length, i++){
		if(arr[i] !== first){
			return false;
		}
	}
	else {
		return true;
	}
}

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

function sumElement(arr) {
	var total = 0;
	arr.forEach(function(element){
		total=total+element;
	});
	return total;
}

function max(arr) {
	var max = arr[0];
	arr.forEach(function(element){
		if(element > max){
			max=element;
		}

	});

}