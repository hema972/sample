//false values
// 0 null false undefined " "
let obj1 = {
    name: "HEM",
    age: 21
};
let obj2 = obj1;
obj2.name = "LAT";
//console.log(obj1.name);
if(obj1.name)
{
    console.log('true');
}
else{
    console.log('false');
}