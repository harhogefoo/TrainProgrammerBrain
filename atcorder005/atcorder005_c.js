JsOsaDAS1.001.00bplist00�Vscript_t
var input = "1\n3\n1 2 3\n3\n2 3 4";
//var input = "1\n3\n1 2 3\n3\n2 3 5";

var _input = input.split("\n");
var T = Number(_input[0]);  //1
var N = Number(_input[1]);  //3
var A = _input[2].split(" ");  //1 2 3
var M = Number(_input[3]);  //3
var B = _input[4].split(" ");  //2 3 4

if(M > N)
{
	console.log("no");
}else{
	var i = 0;
	var j = 0;
	while(i < M && j < N){
		if(Number(B[i]) < Number(A[j]))
		{
			j = N;
		}
		else if(Number(B[i]) - Number(A[j]) <= T && Number(B[i]) - Number(A[j]) >= 0)
		{
			i++;
			j++;
		}
		else{
			j++
		}
	}
	
	if(i == M)
	{
		console.log("yes");
	}
	else
	{
		console.log("no");
	}
}

                              �jscr  ��ޭ