/* 文字列を逆順に返すメソッド */
String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

/* 11から探索開始 */
var num = 11;
while (true) {
  is_decimal_parindromes = num.toString() == num.toString().reverse();
  is_binary_parindromes = num.toString(2) == num.toString(2).reverse();
  is_octal_parindromes = num.toString(8) == num.toString(8).reverse();
  if (is_decimal_parindromes && is_binary_parindromes && is_octal_parindromes) {
      console.log(num);
      break;
    }
  /* 奇数だけ探す */
  num += 2;
}
