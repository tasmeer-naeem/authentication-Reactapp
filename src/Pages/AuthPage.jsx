import React from 'react'
import GoogleForm from '../Components/GoogleForm'
import SigninForm from '../Components/SigninForm'
import Signout from '../Components/Signout'
import SignupForm from '../Components/SignupForm'

const AuthPage = () => {
    return (
        <div>
            <h1>Authentication</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleForm/>
            <Signout/>
        </div>
    )
}

export default AuthPage
