let array=new Array();
for(let i=0;i<10;i++){
    let num=Math.floor(Math.random()*899)+100;
    array.push(num);
}
console.log("Before sorting the array: "+array); 
let temp=0;
for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]<array[j]){
           temp=array[j];
           array[j]=array[i];
           array[i]=temp;
        }
    }
}
console.log("After Sorting the array: "+array);
console.log("The Second largest element: "+array[1]);
console.log("The Second smallest element: "+array[(array.length)-2]);