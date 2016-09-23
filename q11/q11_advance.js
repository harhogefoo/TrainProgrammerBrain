var a = b = 1
var count = 0
while (count < 11) {
    var c = a + b;
    // 1桁ずつに分割して各桁の和を取得
    var sum = 0;
    var str = c.toString().split("");
    for (var i=0 ; i<str.length ; i++){
        sum += Number(str[i]);
    }
    if (c % sum == 0){
        console.log(c);
        count += 1;
    }
    a = b;
    b = c;
}
