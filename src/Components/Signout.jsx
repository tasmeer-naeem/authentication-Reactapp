import React from 'react'
import { SignoutAction } from '../Redux/Auth/AuthAction'
import {connect} from 'react-redux'

const Signout = ({SignoutAction}) => {
    return (
        <div>
            <button onClick={SignoutAction} >Sign Out</button>
        </div>
    )
}

var action={
    SignoutAction
}

export default connect(null,action)(Signout)
