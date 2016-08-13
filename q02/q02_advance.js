// var op = ["+", "-", "*", "/", ""]; // 空白を入れるのもポイント
var op = ["*", ""]; // + と - と / を使うと絶対に逆にならない 
for (i = 1000; i < 10000; i++) {
  var c = String(i);
  for (j = 0; j < op.length; j++) {
    for (k = 0; k < op.length; k++) {
      for (l = 0; l < op.length; l++) {
        // 逆順にしたものを計算して出せば毎回reverseをかける必要が無い
        // i が 計算した結果
        // 逆順にしたものを四則演算したものが計算前
        // Rubyだと例外処理などでハマってできなかった...
        // eval(1+08+1) とかをよしなにやってくれるJSたん最高...
        val = c.charAt(3) + op[j] + c.charAt(2) + op[k] + c.charAt(1) + op[l] + c.charAt(0);
        if (val.length > 4) { // 必ず演算子は1つ以上入れる
          if (i == eval(val)) {
            console.log(val + " = " + i);
          }
        }
      }
    }
  }
}

