
var count = 0;

for(var i = 0;i <= 2;i++){  //500円玉
	for(var j = 0;j <= 10;j++){  //100円玉
		for(var k = 0;k <= 15;k++){  //50円玉
			for(var l = 0;l <= 15;l++){  //10円玉
			
				var num = i + j + k + l;  
				var sum = 500 * i + 100 * j + 50 * k + 10 * l;
				if(sum == 1000 && num <= 15) count++;
				
			}
		}
	}
}

console.log("ans = "+count)