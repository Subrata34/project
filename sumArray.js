var a = [60, 80, 90, 100];
//var sum = 0;
//for (var i = 0; i < a.length; i++) {
//    sum = sum + a[i];

//}

//console.log(sum);
function numberArray(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        s = s + a[i];
    }
    return s;

}
var sum = numberArray([80, 90, 9, 70, 60]);
console.log('This is my sum value :', sum);