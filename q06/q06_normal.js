var count = 0;
for (var i=2 ; i<=10000 ; i = i+2){
	var value = 9*i+4;
	while(true){
		value = calc(value);
		if(value == 1){
			break;
		}
		if(value == i){
			count++;
			break;
		}
	}
}
console.log(count);

function calc(val){
	var result = 0;
	if(val % 2 == 0){
		result = val / 2;
	}else{
		result = 3 * val + 1;
	}
	return result;
}