import React from 'react'
import { connect } from 'react-redux'
import { GoogleSigninAction } from '../Redux/Auth/AuthAction'

const GoogleForm = ({GoogleSigninAction}) => {
    return (
        <div>
            <button onClick={GoogleSigninAction} >Google Signin</button>
        </div>
    )
}

var action={
    GoogleSigninAction
}

export default  connect(null,action)(GoogleForm)
