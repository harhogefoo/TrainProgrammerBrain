var count = 0;
var numArray = new Array(10);
var array = [0,1,2,3,4,5,6,7,8,9];

function assignmentLoop(array1){
    for(var in1 = 0; in1 < array1.length; in1++){
        numArray[array1.length - 1] = array1[in1];
        var array2 = removeNumFromArray(array1[in1], array1)
        if(array2.length ===0){
            check();
        }else{
            assignmentLoop(array2);
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

function check(){
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

assignmentLoop(array);

console.log(count);