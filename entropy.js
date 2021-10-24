let inputData = 'abrakadabra';
let arg = process.argv;
let powerSize = 0 ;
let i = 0;
let entropy = 0;
let alph = new Array();
    for (i =0; i<inputData.length; i++) {
        alph[inputData.charAt(i)] = 0;
    }
    for (i =0; i<inputData.length; i++) {
        alph[inputData.charAt(i)]++;   
    }
    for (i in alph) {
        powerSize++;
        entropy += (alph[i] / inputData.length * 
		(Math.log(alph[i] / inputData.length))) ;
    }
    if (powerSize == 1) {
    	console.log(entropy);
    }
    if (powerSize > 1){
        entropy /= Math.log(powerSize)
        entropy = Math.abs(entropy)
        console.log(entropy);
	}
