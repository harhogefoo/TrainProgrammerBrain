var expression = "READ+WRITE+TALK==SKILL";
var nums= expression.split(/[^a-zA-Z]/);
var split = nums.join().split("").toString();
var replace= split.replace(/\,/g,"");
var chars = Array.from(new Set(replace));
var head = nums.map(function(element, index, array){
    return element[0];
});

var count = 0;
var numArray = new Array(chars.length);
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
    var is_zero_first = false;
    if(numArray.includes(0)){
        is_zero_first = head.includes(chars[numArray.indexOf(0)]);
    }
    if(is_zero_first){
        return;
    }
    var e = expression;
    for(var i = 0; i < chars.length; i++){
        var before = chars[i];
        var regExp = new RegExp(before, "g");
        e = e.replace(regExp, numArray[i]);
    }
    if(eval(e)){
        console.log(e);
        count++;
    }
}

assignmentLoop(array);

console.log(count);