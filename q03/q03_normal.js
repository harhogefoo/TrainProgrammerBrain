 
//カードの枚数を定義
var card_count = 100;

//カードの連想配列を定義
var card_list = new Object();
for (var i=1; i <= card_count; i++)
{
	var key = i.toString(10);
	var value = false;
	card_list[key] = value;
}

for (var i=2; i <= card_count; i++)
{
	var num = i;
	
	do
	{
		card_list[num.toString(10)] = !card_list[num.toString(10)];
		num += i;
		
	} while (num < card_count);
}

for (key in card_list)
{
	if (card_list[key]==false)
	{
		console.log(key);
	}
}