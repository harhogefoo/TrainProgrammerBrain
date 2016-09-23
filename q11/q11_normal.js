count = 0

function fib(n1, n2){
    if (count >= 11){
        return;
    }

    var n3 = n1 + n2;
    var str = n3.toString().split("");
    var div = 0;
    for (var i=0 ; i<str.length ; i++){
        div += Number(str[i]);
    }

    if(n3 % div == 0){
        console.log(n3);
        count += 1;
    }

    fib(n2,n3);
}
fib(1,1);
