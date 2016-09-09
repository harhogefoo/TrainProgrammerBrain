
function print_array(array) {
  var ary_str = "";
  for (var i = 0; i < girl; i++) {
    for (var j = 0; j < boy; j++) {
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

var boy = 20;
var girl = 10;
boy += 1;
girl += 1;
var ary = new Array(girl);
for (var i = 0; i < girl; i++) {
  ary[i] = new Array(boy);
  for (var j = 0; j < boy; j++) {
    ary[i][j] = 0;
  }
}

ary[0][0] = 1;
for (var i = 0; i < girl; i++) {
  for (var j = 0; j < boy; j++) {
    if ((i != j) && ( boy - j != girl - i )) {
      if (j > 0) {
        ary[i][j] += ary[i][j - 1];
      }
      if (i > 0) {
        ary[i][j] += ary[i - 1][j];
      }
    }
    console.log("i = " + i + " j = " + j);
    print_array(ary);
  }
}

console.log(ary[girl - 2][boy - 1] + ary[girl - 1][boy - 2]);
