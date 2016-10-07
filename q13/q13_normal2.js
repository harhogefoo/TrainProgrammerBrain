(function() {
  var generatePermutation = function(perm, pre, post, n) {
    var elem, i, rest, len;
    if (n > 0)
      for (i = 0, len = post.length; i < len; ++i) {
        rest = post.slice(0);
        elem = rest.splice(i, 1);
        generatePermutation(perm, pre.concat(elem), rest, n - 1);
      }
    else
      perm.push(pre);
  };

  /*
  extend Array.prototype
  e.g. [0, 1, 2].permutation(2)
  => [[0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1]]
  */
  Array.prototype.permutation = function(n) {
    if (n == null) n = this.length;
    var perm = [];
    generatePermutation(perm, [], this, n);
    return perm;
  };
})();

function check(numArray){
    var r = numArray[0],
    e = numArray[1],
    a = numArray[2],
    d = numArray[3],
    w = numArray[4],
    i = numArray[5],
    t = numArray[6],
    l = numArray[7],
    k = numArray[8],
    s = numArray[9];
    if(r===0 || w===0 || t===0 || s===0){
        return;
    }
    var read = r * 1000 + e * 100 +  a * 10 + d;
    var write = w * 10000 + r * 1000 + i * 100 + t * 10 + e;
    var talk = t * 1000 + a * 100 + l * 10 + k;
    var skill = s * 10000 + k * 1000 + i * 100 + l * 10 + l;
    if((read+write+talk)==skill){
        console.log("read+write+talk=skill:" + read + "+" + write + "+" + talk + "=" + skill);
        count++;
    }
}

var count = 0;
var numArray = new Array(10);
var dataArray = [0,1,2,3,4,5,6,7,8,9].permutation();

for(var i =0; i < dataArray.length; i++){
  check(dataArray[i]);
}

console.log(count);