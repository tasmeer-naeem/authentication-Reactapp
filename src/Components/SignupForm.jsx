import React from 'react'
import { useState } from 'react'
import { SignupAction } from '../Redux/Auth/AuthAction'
import {connect} from 'react-redux'
//import { auth } from './Firebase'

const SignupForm = ({SignupAction}) => {
    //console.log(auth)
    const [fullname, setfullname] = useState('')
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
    
        const handleformsubmit=(e)=>{
                e.preventDefault();
                var cred={
                    fullname,email,password
                }
                SignupAction(cred)
                // console.log(fullname)
                // console.log(email)
                // console.log(password)
                
        }
        return (
            <div>
             <h1>SIGN UP FORM</h1>
         <form onSubmit={handleformsubmit} >
           Name
          <input type="text" className="namesignup" onChange={(e)=>setfullname( e.target.value)} value={fullname}  ></input>
          Email
          <input type="text" className="emailsignup" onChange={(e)=>setemail(e.target.value)} value={email}></input>
          Password
          <input type="text" className="passsignup" onChange={(e)=>setpassword (e.target.value)} value={password}></input>
          <button type="submit" >Submit</button>
          </form>
             </div>
        )
}

var action={
    SignupAction
}


export default connect(null,action)(SignupForm);
