var count = 0;
var numArray = new Array(10);
var array = [0,1,2,3,4,5,6,7,8,9];
var r, e, a, d, w, i, t, l, k, s;

function assignmentLoop(array1){
    for(var in1 = 0; in1 < array1.length; in1++){
        numArray[array1.length - 1] = array1[in1];
        var array2 = removeNumFromArray(array1[in1], array1)
        if(array2.length ===4){
            check(array2);
        }else{
            assignmentLoop(array2);
        }
    }
}

function assignmentLoop2(array1){
    for(var in1 = 0; in1 < array1.length; in1++){
        numArray[array1.length - 1] = array1[in1];
        var array2 = removeNumFromArray(array1[in1], array1)
        if(array2.length ===0){
            check2();
        }else{
            assignmentLoop2(array2);
        }
    }
}

function removeNumFromArray(num, array){
    var newArray = new Array(array.length - 1);
    var index = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == num){
            continue;
        }
        newArray[index] = array[i];
        index++;
    }
    return newArray;
}

function check(array){
    e = numArray[9];
    a = numArray[8];
    d = numArray[7];
    t = numArray[6];
    k = numArray[5];
    l = numArray[4];
    if(!(((a + t == 8) || (a + t == 9) || (a + t == 10)) &&
        ((a + e == 8) || (a + e == 9) || (a + e == 10)) &&
        ((d + e + k) % 10 == l) &&
        (((a + t + l) * 10 + d + e + k) % 100 == l * 11))){
        return;
    }else{
        assignmentLoop2(array);
    }
}

function check2(){
    i = numArray[3];
    r = numArray[2];
    s = numArray[1];
    w = numArray[0];
    if(r===0 || w===0 || t===0 || ((s != w + 1) && (s != w + 2))){
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

assignmentLoop(array);

console.log(count);