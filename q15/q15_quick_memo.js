
var n = 100;
var MAX_STEPS = 4;
var memo = {};

function move (a_current, b_current) {
  if ([a_current, b_current] in memo) {
    console.log("メモしたものを使うよ");
    return memo[[a_current, b_current]];
  }
  if (b_current < a_current) {
    return 0;
  }
  if (a_current == b_current) {
    return 1;
  }

  var count = 0;
  for (var i=1; i<=MAX_STEPS; i++) {
    for(var j=1; j<=MAX_STEPS; j++) {
      count += move(a_current + i, b_current - j)
    }
  }
  memo[[a_current, b_current]] = count;
  console.log(memo);
  return count;
}

console.log(move(0, n));

