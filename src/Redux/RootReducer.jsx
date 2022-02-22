//import react from 'react'
import { combineReducers } from 'redux';
import AuthReducer from './Auth/AuthReducer'

const RootReducer=combineReducers({
    AuthReducer
})

export default RootReducer;