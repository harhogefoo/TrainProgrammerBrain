JsOsaDAS1.001.00bplist00�Vscript_V
var card_list = ["1","2","3","4","5","6"]

var N = 100000000

SHUFFLE(N % (card_list.length*(card_list.length-1)))

function SHUFFLE (n)
{
	if (n==0)
	{
		console.log(card_list)
		return
	}
	
	for (var i=0; i<n; i++)
	{
		var index = (i%5)+1
		card_list.splice(index-1, 2, card_list[index], card_list[index-1])
	}
	
	console.log(card_list)
}                              ljscr  ��ޭ