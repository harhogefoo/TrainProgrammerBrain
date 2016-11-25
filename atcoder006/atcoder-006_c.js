var babies;
var adults;
var olds;
var rest;

var N = 7;
var M = 23;

function sphinx(){
	if (N * 2 > M || N * 4 < M) {
        console.log("-1 -1 -1");
      } else {
        rest = M - N * 2;
        babies = Math.floor(rest / 2);
        olds = rest % 2;
        adults = N - olds - babies;
        console.log("%d %d %d", adults, olds, babies);
      }
}

sphinx();


