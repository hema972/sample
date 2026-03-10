//for of:-access the values
//for in:access the keys or index

let num=[2,3,4,5,6]
for(let v of num)     //for(let variablename of arrayname) of gives values
{
    console.log(v);
}
for(let i in num)   //for(let variablename in arrayname) in gives index or key
{
    console.log(i);
}
let obj={
    name:'hem',
    city:'hdp',
    age:21
}
for(let i in obj)  //in gives index/key 
{
    console.log(i);
}
/*for (let v of obj)
🚨 Error happens.
Why?
Because:
👉 for...of works only on iterable things
Examples of iterable:
Arrays
Strings
Maps
Sets
But normal objects like dictionaries are NOT iterable ❌
but can be accessed when we use Object.values(objectname)*/
let obj1={
    name1:'hem',
    city1:{
        ci:'hdp',
        dis:'hdp'
    },
    age1:21
}
//let obj1={}   if obj1 is empty then ?. console fails
for(let ii in obj1)
{
    console.log(ii);
}
for(let av of Object.values(obj1)) //it gives values of keys output is
{                                  //hem
    console.log(av)                //{ ci: 'hdp', dis: 'hdp' }
}                                  //21
//console.log(obj1?.city1?.ci) //->checks obj1 exists?.city1 exists?.ci give me
                //or
//console.log(obj1.city1);//->fails when obj1 is empty or city1 is empty