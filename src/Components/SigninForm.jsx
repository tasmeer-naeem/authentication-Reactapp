import React from 'react'
import { useState } from 'react'
import { SigninAction } from '../Redux/Auth/AuthAction'
import {connect} from 'react-redux'

const SigninForm = ({SigninAction}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleformsubmit=(e)=>{
            e.preventDefault();
            // console.log(email)
            // console.log(password)
            var cred={
                email,
                password
            }
            SigninAction(cred)
    }
    return (
        <div>
        <h1>SIGN IN FORM</h1>
    <form onSubmit={handleformsubmit} >
     Email
     <input type="text" className="emailsignin" onChange={(e)=>setemail(e.target.value)} value={email}></input>
     Password
     <input type="text" className="passsignin" onChange={(e)=>setpassword (e.target.value)} value={password}></input>
     <button type="submit" >Submit</button>
     </form>
        </div>
    )
}

var action={
    SigninAction
}
 export default connect(null, action)(SigninForm)
