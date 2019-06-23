

var jasuil='성일짱';
console.log('i\'m', jasuil);

var s='';
var total = 0;
for(var p=0, c=1, n=0; c<=21; n = p+c, p=c, c=n){
    s += c + (c == 21 ? '=' : '+');
    total += c;
}

console.log(s, total);