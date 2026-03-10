let arr=[1,2,3,4,5]
const add_one=(num)=>{return num+1}
let res=arr.map(add_one) //to iterate array instead of for loop we are using map function
let double=arr.map((num)=>num*2)
console.log(double)
let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:20000}
]
let productname=products.map((product)=>{console.log(product.name)})
let arr1=[1,2,3,4,5,6]
let b=arr1.filter((num)=>num>3)
let su=products.reduce((res,cur)=>{return res+cur.price},0)
let a=products.find((p)=>p.id==2)
console.log(a);
console.log(su);
console.log(b);

/*| Name | Meaning                     |
| ---- | --------------------------- |
| acc  | accumulator (stores result) |
| curr | current element             |
*/
let arr2=[1,2,3,4,5,6]
//we loop using reduce also reduce → combine everything into ONE value
let sum=arr2.reduce((total,curr)=>{return total+curr},0) //intially total=0 given as ,0
console.log(sum);

//Destructuring
//Destrcturing through arrays

/*This is called Array Destructuring.
It means:
👉 Taking values from array
👉 Storing them directly into variables*/

let arr3=[11,22,33,44,55]
let [d,,f]=arr3
console.log(d)
console.log(f)

/*Object destructuring means:
👉 Taking values from an object
👉 And storing them directly into variables
👉 Using { } syntax
What is happening?
This is Object Destructuring.
Instead of writing:
students.name
students.department
You directly extract them into variables.
In arrays → matching happens by position
In objects → matching happens by key name*/

/*Normal way
let student = {
    name: "Hem",
    department: "cse",
    age: 22
};
let name = student.name;
let department = student.department;
console.log(name, department);*/

/* Destructuring way
let student = {
    name: "Hem",
    department: "cse",
    age: 22
};
const { name, department } = student;
console.log(name, department);*/

//Destructuring through objects

let students={
    name:'Hem',
    department:'cse',
    age:22
}
const {name,department}=students
console.log(name,department)

let car={
    brand:'bmw',
    year:1886
}
const {brand}=car;
console.log(brand)

//Spread operators through array
/*
it is not possible when
let arr4=[11,22,33,44,55]
let arr5=[66,...arr4]
let arr6=[...arr4,...arr5]
console.log(arr6) 
*/

let arr4=[11,22,33,44,55]
let arr5=[66,77]
let arr6=[...arr4,...arr5]  //spreading
console.log(arr6); 
let [first,...other]=arr4 //destructuring+resting
console.log(other)

// Spreading through objects
let newcar={...car,year:2026} //previously car object as bmw and 1886 but we changed year:2026 it wont create new year but it replaces a new year to year as 1886 to 2026
console.log(newcar)

/*Usage of sperading
Why Do We Use Spread?
✅ Copy arrays
✅ Copy objects
✅ Merge objects
✅ Avoid modifying original data*/

/*Position of ...
Situation	What it does
On right side	✅ Spread (expand)
On left side	✅ Rest (collect)
ex:-let arr6=[...arr4,...arr5] spreading
ex:-let [first,...other]=arr4 resting
*/