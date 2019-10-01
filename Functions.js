/* Syntax
        function functionName(args)
        {}
    function is a keyword which is used to define a function;
*/

function firstFunction(a)
{
    console.log(a);
}
firstFunction(10);

/* We can define a function with default values to the arguments. */

function defaultValue(a,b,c=10)
{
    console.log(a+" "+b+" "+c);
}
defaultValue(1,2,3);                // 1 2 3
defaultValue(1,2);                  // 1 2 10
defaultValue(1,2,3,4);              // No Error , 1 2 3 (Output)


/* Using rest operator 
    This operator is very handy when we don't know how many arguments we will receive
*/
function unkownArgs(... a)          // Will take all the arguements and put them into an array
{
    console.log(a);
}
unkownArgs(9,'Value',25);           // 9 'Value' 25 