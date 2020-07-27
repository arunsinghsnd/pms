import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const SignIn = () => {
  const history = useHistory()
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [mobile,setMobile] = useState("")

  const PostData = () =>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
     M.toast({html: "Invaild fileds", classes:"#c62828 red darken-3"})
     return 
    }
    fetch("http://172.104.59.184/user/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      first_name,
      last_name,
      email,
      mobile,
      password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
     M.toast({html: data.error, classes:"#c62828 red darken-3"})
      }
      else{
        M.toast({html:data.message,classes:"#43a047 green darken-1"})
        history.push('/signin')
      }
    }).catch(err=>{
      console.log(err)
  })
  }






  
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2> Pharmacy Management System </h2>
        <input type="text"
         placeholder="first name" 
           value={first_name}
           onChange={(e)=>setFirstName(e.target.value)}
         />
         <input type="text"
         placeholder="Last name" 
           value={last_name}
           onChange={(e)=>setLastName(e.target.value)}
         />
         
        <input type="text" 
        placeholder="email"
        value={email}
           onChange={(e)=>setEmail(e.target.value)}
         />
         <input type="text"
         placeholder="enter mobile" 
           value={mobile}
           onChange={(e)=>setMobile(e.target.value)}
         />
        <input type="text" 
        placeholder="password" 
        value={password}
           onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #0095F6 blue darken-1"
        onClick={()=>PostData()}
        >
         SignUP
        </button>
        <h5>
            <Link to="/signin">Already have an account?</Link>
        </h5>
      </div>
    </div>
  )
}

export default SignIn;
