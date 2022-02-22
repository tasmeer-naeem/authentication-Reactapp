import firebase, { auth, firestore, serverTimeStamp ,googleAuthProvider } from "../../Components/Firebase"
import { SET_USER , REMOVE_USER} from "./AuthConstant"
import history from "../../Components/History"

export var setUser = (user)=> ({
            type:SET_USER,
            payload:{
                user
            }
})
export var removeUser = ()=> ({
    type:REMOVE_USER,
})

export var SignupAction = ({ email, password, fullname }) => async (dispatch) => {
    try {
      //create user on firebase auth section
      var {user: { uid } } = await auth.createUserWithEmailAndPassword(email, password);
      //save user data to firestore
      var userInfo = {
        fullname,
        email,
        createdAt: serverTimeStamp(),
      };
      console.log(userInfo)
      var firestoree = firestore.collection("users").doc(uid).set(userInfo);
      //await firestore.collection("users").doc(uid).set(userInfo);
  
      //navigate to hom page
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export var SigninAction = ({ email, password }) => async (dispatch) => {
    try {
      //signin user with auth
      await auth.signInWithEmailAndPassword(email, password);
      //navigate to hom page
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

export var SignoutAction = () => async (dispatch) => {
    try {
      //signout user from firebase auth
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

export var GoogleSigninAction = () => async (dispatch) => {
    try {
      //signin user in firebase auth (google)
      var {
        user: { displayName, email, uid },
        additionalUserInfo: { isNewUser },
      } = await auth.signInWithPopup(googleAuthProvider);
      if (isNewUser) {
        //if new user -> add ingo to fire store
        var userInfo = {
          fullname: displayName,
          email,
          createdAt: serverTimeStamp(),
        };
        await firestore.collection("users").doc(uid).set(userInfo);
      }
      //navigate to hom page
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  

export var firebaseAuthListener = () => async (dispatch) => {
    try {
      //firebase auth listener
      firebase.auth().onAuthStateChanged(async function (user) {
        if (user) {
          // User is signed in.
          var { uid } = user;
          //fetch user data from firestore
          var query = await firestore.collection("users").doc(uid).get();
          var { displayName, email } = query.data();
          //setting up redux state
          var userDataForState = {
            fullname : displayName,
            email,
            uid,
          };
          dispatch(setUser(userDataForState));
        } else {
          // No user is signed in.
          //set auth state to null
          dispatch(removeUser());
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  