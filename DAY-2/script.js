// 1.Sum of all the elements in an array
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum);
console.log("-------------------------------------");


// 2. Find the repeated elements in an array
let array = [1, 2, 3, 4, 5, 2 ,1];
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            console.log("Duplicate element is: "+array[i]);
            break;
        }
   }
}