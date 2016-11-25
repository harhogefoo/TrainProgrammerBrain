var test = 100000;
var count = test-3;
var a = b = 0;
var c = 1;

function tribonacci(){
	if(count < 0){
		return 0;
	}
	while(count > 0){
		var d = (a+b+c)%10007;
		a = b;
		b = c;
		c = d;
		count--;
	}
	return c;
}

console.log(tribonacci());

//a,b,c 10007で割った合計がdになるので結局最後に10007で割るのと同じ 桁あふれを起こさないために使用