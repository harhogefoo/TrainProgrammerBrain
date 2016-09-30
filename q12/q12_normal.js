//整数部分を含める場合
var i = 0;
while(true){
	i++;
	var root = Math.sqrt(i).toString();
	var replace = root.replace(/\./g,"");	//小数点を削除
	var slice = replace.slice(0,10);		//左から10文字を取得
	var array = Array.from(new Set(slice)); //重複している文字を削除

	if(array.length == 10)
	{
		break;
	}
}
console.log("answer = "+i);

//小数部分のみの場合
var i = 0;
while(true){
	i++;
	var str = Math.sqrt(i).toFixed(10).toString().split(".")[1].slice(0,10);
	var array = Array.from(new Set(str));

	if(array.length == 10)
	{
		break;
	}
}
console.log("answer = "+i);
