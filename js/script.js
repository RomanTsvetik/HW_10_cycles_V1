//task 1
let num = 1;
for (; num <= 100; num++) {
    console.log(num);
}

//task 2
let i = 100;
while (i) {
    console.log(i);
    i--;
}

//task3
let a = 0;
for (a; a <= 100; a++){
    if (a % 2 == 0) {
        console.log(a);
    }
}

//task4
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++){
    sum += arr[i];    
}
console.log(sum);

//task5
const array = [1, 2, 3, 4, 5];
let Sum = 0;

for (let i = 0; i < array.length; i++){
    Sum += Math.pow(array[i], 2);    
}
console.log(Sum);



    
