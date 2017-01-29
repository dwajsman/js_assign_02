let myArr = ['dog','cat','mouse'];

//console.log(myArr); 

indexArreador = function(array){


	for (let i = array.length - 1; i >= 0; i--) {

		console.log(`${[i]}:${array[i]}`);

	};

};

indexArreador(myArr);