JsOsaDAS1.001.00bplist00�Vscript_�
var input = "5\n3\n1\n4\n1\n5";

var num = input.split("\n");
var min = num[1];

for(var i = 1;i <= num[0];i++)
{
	if(min > num[i])
	{
		min = num[i];
	}
}

console.log(min);                            � jscr  ��ޭ