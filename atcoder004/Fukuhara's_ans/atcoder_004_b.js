JsOsaDAS1.001.00bplist00�Vscript_�
var input = ["o","x","o",".",".","o","x",".","o",".","x","o",".","o","x","o"]

for (var i=0; i<input.length/4; i++)
{
	var order = i * 4
	console.log(input[order] + " " + input[order+1] + " " + input[order+2] + " " + input[order+3]);
}

var output = input.reverse()

console.log("---------")

for (var i=0; i<output.length/4; i++)
{
	var order = i * 4
	console.log(output[order] + " " + output[order+1] + " " + output[order+2] + " " + output[order+3]);
}                              � jscr  ��ޭ