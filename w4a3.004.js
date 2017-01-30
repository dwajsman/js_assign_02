let myArr = [10,20,30,40,50,60];

console.log(myArr);
	
	let myNewArr = [];


add2 = function(array, array2){

	for (let i = array.length - 1; i >= 0; i--) {
		
		array2.unshift((array[i]+2));

	};

};

add2(myArr, myNewArr);

console.log(myNewArr);
