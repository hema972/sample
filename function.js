/*function mul(a, b) {
    return a * b;
}

function print(n1, n2) {
    return mul(n1, n2);
}

function main() {
    console.log(print(10, 20));
}

main();*/

//add(2,3);->also posstible in defination function
function add(a,b)
{
    console.log(a+b);
}
//add(2,3);->also possible in defination func

//sub(10,3);->not possible in arrow function coz after arrow function we should call
const sub=(a,b)=>{
    console.log(a-b);
}
sub(10,3);

//call back function
const calc=(a,b,fun)=>  //fun is a variable.
{
    fun(a,b)
}
calc(10,3,add);    //given function as variable.