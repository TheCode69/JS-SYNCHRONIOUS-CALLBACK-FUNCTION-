/* Synchronous callbacks*/
let age = function grow()
{
    age = 20;
    console.log(age);
}

let height = function tall(callback)
{
    height = 55;
    crazy  = "YEAH"
    console.log(height);
    callback();
    console.log(crazy);
}
console.log("HURRAY");
tall(grow);
console.log("gaddemit");