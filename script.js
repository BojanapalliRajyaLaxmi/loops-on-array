// Task 1: for...in Loop with an Array
// ------------------------------------
// Create an array of 5 colors: ['red', 'green', 'blue', 'yellow', 'orange'].
// Using a for...in loop, print the index of each element in the array.
array=['red','green','blue','yellow','orange'];
for(var index in array){
    console.log(index);
}
// output:
// 0 
// 1 
// 2
// 3
// 4
// 5
// Task 2: for...of Loop with an Array
// --------------------------------------
// Create an array of 5 animals: ['cat', 'dog', 'rabbit', 'elephant', 'lion'].
// Using a for...of loop, print the name of each animal in the array.
arr=['cat','dog','rabbit','elephant','lion']
for(var data of arr){
    console.log(data);
}
// output:
// cat
// dog
// rabbit
// elephant
// lion

// Task 3: Sum of Array Elements using a while Loop
// -------------------------------------------------
// Create an array of numbers [2, 4, 6, 8, 10].
// Using a while loop, calculate and print the sum of the elements in the array.
a=[2,4,6,8,10];
sum=0;
var i=0;
while(i<a.length){
    sum+=a[i];
    i++;
}
console.log(sum);
// output:
// 30
// Task 4: Reverse Array using a do...while Loop
// ---------------------------------------------
// Create an array of 5 numbers: [1, 2, 3, 4, 5].
// Using a do...while loop, print the array elements in reverse order.
array=[1,2,3,4,5];
reverse_array=" ";
var i=array.length-1;
do{
    reverse_array+=array[i]+" ";
    if(i==0){
        break;
    }
    i--;
}
while(i<array.length);
console.log(reverse_array);
// output:
//  5 4 3 2 1

// Task 5: Sum of Even Numbers using do...while Loop
// --------------------------------------------------
// Given an array of numbers [3, 6, 9, 12, 15, 18], use a do...while loop to find the sum of even numbers.
a=[3,6,9,12,15,18];
sum=0;
var i=0;
do{
    if(a[i]%2==0){
        sum+=a[i];
        }
        i++;
}
while(i<a.length);
console.log(sum);
// output:
// 36

// Task 6: Reverse the Array using a while Loop
// ---------------------------------------------

// Create an array ['a', 'b', 'c', 'd', 'e'] and reverse the elements using a while loop without using any built-in array reverse methods.
a=['a','b','c','d','e'];
reverse=" ";
var i=a.length-1;
while(i<a.length){
    reverse+=a[i]+" ";
    if(i==0){
        break;
    }
    i--;
}
console.log(reverse);
// output:
// e d c b a
