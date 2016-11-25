var test = '13';

function isIncluding3(num){
	if(num.match(/3/)){
		return true;
	}else{
		return false;
	}
}

function isDivisible(num){
	if(num % 3 == 0){
		return true;
	}else{
		return false;
	}
}

function check(num){
	if(isIncluding3(num)){
		return 'YES';
	}else if(isDivisible(num)){
		return 'YES';
	}else{
		return 'NO';
	}
}

console.log(check(test));