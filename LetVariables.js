/* Let variables are block variables and they have different values in different scopes */
let a = 10;
if(true)
{
    let a = 25;                     // Creates local variable 
}
console.log(a);                     // 10

function LetVariable()
{
    let a = 30;
}
console.log(a);                    // 10