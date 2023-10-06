import React, { useState } from 'react'

function LoginPage() {
const[username, setUsername] = useState ("");
const[password, setPassword] = useState("");
const [valid, setValid] = useState(false);
const handleSubmit =() =>{
    if (username ==="abc"&& password==="123")
    setValid(true);
}



return (
    
    
    <div>
            <form>
            <labell>Login Name </labell>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label>Login password</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>

               
            </form>
    </div>
  )
  
}

export default LoginPage