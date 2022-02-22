//import react from 'react'
import { applyMiddleware , createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'

var middleware=[thunk]

const store=createStore(RootReducer,composeWithDevTools(applyMiddleware(...middleware),))

export default store;