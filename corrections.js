//task 1
for (let num = 1; num <= 100; num++) {
    console.log(num);
}

//task3
for (let a = 0; a <= 100; a+= 2){
    if (a % 2 == 0) {
        console.log(a);
    }
}

//task5
const array = [1, 2, 3, 4, 5];
let sumSquare = 0;

for (let i = 0; i < array.length; i++){
    sumSquare += Math.pow(array[i], 2);    
}
console.log(sumSquare);
    