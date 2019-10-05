/* Different types of functions */


/* Anonymous Functions */

var a = function()
{
    console.log('Anonymous Function');
}
a();


/* Arrow Functions */

var func = (... a)=>                    // For mulitple arugments we have to use a bracket, here a is act as array of 5,6,7
{                                       // we can use (a,b,c) also instead of (...a) to avoid array creation
    console.log(a);
    console.log('Arrow Function'); 
}
func(5,6,7);

var func1 = a=>                     // For always single argument in Arrow function we can directly give the name of the argument
{
    console.log(a);
}
func1(10);
