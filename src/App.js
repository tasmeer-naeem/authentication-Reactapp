//import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import { useEffect} from 'react'
import {firebaseAuthListener} from './Redux/Auth/AuthAction'
import { connect } from 'react-redux';


function App({firebaseAuthListener}) {
  useEffect(() => {
    //CDM
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    <div >
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={AuthPage} ></Route>
   </Switch>
   </BrowserRouter>
    </div>
  );
}

var action={
  firebaseAuthListener
}

export default connect(null,action)(App);
