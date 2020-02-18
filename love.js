var one = document.getElementById("first").value;
var two = document.getElementById("second").value;
var first = 0;
var second = 0;


for(var i=0; i<one.length; i++){
    first = first+one.charCodeAt(i);
}

for(var i=0; i<two.length; i++){
    second = second + two.charCodeAt(i);
}

result = (first+second)%100;
if(result > 100){
    result = 100;
}
function calcu(){
document.getElementById('cal').innerHTML = result + "% Love";
}
console.log(result);