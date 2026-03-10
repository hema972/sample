import React, { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e) => {

e.preventDefault();

try{

const res = await axios.post(
"https://sample-88rd.onrender.com/api/auth/login",
{
email,
password
}
);

alert("Login Successful");

console.log(res.data);

}catch(err){

alert("Login Failed");
console.log(err);

}

};

return(

<div>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;