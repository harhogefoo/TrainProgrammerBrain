function print_array(array) {
  var ary_str = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var space = 7;
      var count = String(array[i][j]).length;
      var s = "";
      if (String(array[i][j]).length < space) {
        space -= count;
        for (var k = 0; k < space; k++) {
          s += " "
        }
      }
      ary_str += s + ary[i][j] + " ";
    }
    ary_str += "\n";
  }
  console.log(ary_str);
}

var vertical = 3;    // 縦の数
var horizontal = 4;  // 横の数
vertical += 1;       // 配列で管理する上で都合がいい
horizontal += 1;     // 配列で管理する上で都合がいい
var ary = new Array(vertical);
for (var i = 0; i < vertical; i++) {
  ary[i] = new Array(horizontal);
  for (var j = 0; j < horizontal; j++) {
    ary[i][j] = 0;
  }
}

ary[0][0] = 1;
for (var i = 0; i < vertical; i++) {
  for( var j = 0; j < horizontal; j++) {
    if (j > 0) {
      ary[i][j] += ary[i][j - 1];
    }
    if (i > 0) {
      ary[i][j] += ary[i - 1][j];
    }
    console.log("i = " + i + " j = " + j);
    print_array(ary);
  }
}

console.log(ary[vertical - 2][horizontal - 1] + ary[vertical - 1][horizontal - 2]);
