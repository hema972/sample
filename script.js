//var :-can redeclare,global scope,can reassign
//ex:- var h=9 
//     var h=6
//let :-can reassign,blockscope , cannot redeclare
//ex:- let p=10 
//      p=6 
//      not  
//      let p=10 
//      let p=7
//const :-cannot reassign,[blockscope:-it means within a block it can be used once block 
// closed we cant acess outside it ex:- in if condition. 
/*var a=10
{
    var a=20
}
console.log(a)  //op-20 coz global scope not block scope
 datatypes
primitives(Pass by value)
number (int+float)
string
boolean
null
undefined
NAN (Not a number)

every functions works on stack
*/
/*let obj1 = {
    name: "HEM",
    age: 21
};
let obj2 = obj1;
obj2.name = "LAT";
console.log(obj1.name);
*/

let a=10;
{
    a=20;
}
{
    a=30;
}
console.log(a);
console.log(5+'5'); //type casting only for + operator it concat 
console.log(5-'5'); //no type casting other than + all operators are arthemetic operations
console.log(5=='5');//check values 5==5 so true
console.log(5==='5'); //checks datatypes int===string so wrong

let arr=[1,'new',2,'3'] //in js different datatypes can be possible
console.log(arr);