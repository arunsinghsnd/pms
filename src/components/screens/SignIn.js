import React,{useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'

const SignIn = () => {
  const {state, dispatch} = useContext(UserContext)
  const history = useHistory()
  const [password,setPassword] = useState("")
  const [userName,setName] = useState("")

  const PostData = () =>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userName)){
     M.toast({html: "Invaild User Name and Password", classes:"#c62828 red darken-3"})
     return 
    }
    fetch("http://172.104.59.184/user/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        password,
        userName
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
     M.toast({html: data.error, classes:"#c62828 red darken-3"})
      }
      else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        dispatch({type:"USER",payload:data.user})
        M.toast({html:"Signedin Successfully",classes:"#43a047 green darken-1"})
        history.push('/')
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
        placeholder="user name"
        value={userName}
           onChange={(e)=>setName(e.target.value)}
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
         Login
        </button>
        <h5>
            <Link to="/signup">Don't have an account?</Link>
        </h5>
      </div>
    </div>
  )
}

export default SignIn;
