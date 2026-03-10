import React, { useState } from "react";
import axios from "axios";

function Signup() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

try{
const res = await axios.post(
"https://sample-88rd.onrender.com/api/auth/register",
{
name,
email,
password
}
);

alert("User Registered Successfully.Check your email");
console.log(res.data);

}catch(err){
console.log(err);
alert("Registration Failed");
}

};

return(
<div>
<h2>Signup</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/>

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

<button type="submit">Register</button>

</form>

</div>
);

}

export default Signup;