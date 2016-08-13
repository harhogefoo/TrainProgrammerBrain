//カードの枚数を定義
var card_count = 100;

for (var i=1; i <= card_count; i++)
{
	var flag = false;
	for (var j=1; j <= card_count; j++)
	{
		if (i < j)
		{
			break;
		}

		if (i % j == 0)
		{
			flag = !flag;
		}
	}

	if (flag)
	{
		console.log(i);
	}
}