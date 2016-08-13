/* 文字列を逆順に返すメソッド */
String.prototype.reverse = function() {
  return this.split("").reverse().join("");
}

var startDate = new Date("1964/10/10");
var endDate = new Date("2020/07/24");
// getTimeメソッドで経過ミリ秒を取得して，2つの日付の差を求める
var msDiff = endDate.getTime() - startDate.getTime();
// 求めた差分（ミリ秒）を日付へ変換（経過ミリ秒/(1000ミリ秒*60秒r*＊60分*24時間))
var daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

for (var i = 0; i <= daysDiff; i++) {
  var date = new Date();
  date.setTime(startDate.getTime() + 86400000 * i);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var strDate = year + '' + month + '' + day;

  var returnedByteStrDate = parseInt(strDate).toString(2).reverse();
  var decimalDate = parseInt(returnedByteStrDate, 2);

  if (strDate == decimalDate) {
    console.log(decimalDate);
  }
}
