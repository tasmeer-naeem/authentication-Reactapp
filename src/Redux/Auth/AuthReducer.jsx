//import react from 'react'
import { SET_USER , REMOVE_USER} from './AuthConstant';

var initialState=null

const AuthReducer=(state=initialState,action)=>{
    const {type , payload} = action;
    switch (type) {
        case SET_USER:
            return payload.user
        case REMOVE_USER:
            return null
        default:
            return state;
    }

}

export default AuthReducer;