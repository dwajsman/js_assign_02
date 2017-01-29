let myArr = [];


arrPush = function(value1, array){

	array.splice(0,0,value1);

	console.log(`arrPush OK  \n`);

};

arrPush(12,myArr);

arrPush(44,myArr);


console.log(myArr);