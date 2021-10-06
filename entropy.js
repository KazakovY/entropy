let fs = require('fs');
let arg = process.argv;
let alph = new Array();
let i = 0, n = 1;
let entropy = 0;
let alphSize = 0;
fs.readFile('input1.txt',(err, data)=>{
	if (err){
		console.erorr(err);
	}
	let inputData = data.toString();
	for (i =0; i<inputData.length; i++) {
	alph[inputData.charAt(i)] = 0;
	}	
	for (i =0; i<inputData.length; i++) {
	alph[inputData.charAt(i)]++;   
	}
	for (i in alph){
        entropy += ( alph[i] / inputData.length * 
		(Math.log( alph[i] / inputData.length))) ;
		alphSize++;
	}
	entropy /= Math.log(alphSize)
	entropy = Math.abs(entropy)
	console.log(entropy);
});