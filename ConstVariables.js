/* const variables are constant variables whose value cannot be changed after initialization */

const a = 30;
a = 27;                 // Error


const A = [1,2,3];
A.push(4);              // Will compile without any error as the reference to the array is constant not the size / values.

console.log(A);

const obj = {
    a : 25
}
obj.a = 30;            // Will work here too as reference to "obj" is constant not the values inside;
