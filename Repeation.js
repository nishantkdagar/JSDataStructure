let array=new Array();
var a=0;
var b=0;
for(let i=1;i<=100;i++){
    if(i>=10){
        a=parseInt(i%10);
        b=parseInt(i/10);
        if(a==b){
            array.push(i);
        }
    }
}
console.log(array);