var a = 24;
if(true)
{
    var a = 35;                 // Will overwrite the value of "a";
}
console.log(a)                  // 35

function Variables()
{
    var a = 40;                 // Will create a local variable
}

console.log(a);                 // 35