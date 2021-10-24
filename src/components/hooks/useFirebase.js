import { useEffect, useState} from 'react'
import initializeAuthentication from '../../Firebasse/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut} from "firebase/auth";

// for firebase connection . 
initializeAuthentication();

const useFirebase = () => {
    const [user , setUser] = useState({}) ; 
    const [error , setError] = useState('') ; 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

//useEffect is used because firbase does not work for normal user state change
// thats why logout button does not show when a user login
useEffect( () =>{
    onAuthStateChanged(auth, (user) =>{
        if(user){
            //console.log( 'inside state change', user)
            setUser(user)
        }
    } )
}, [])

const logout = () =>{
    signOut(auth)
    .then( ()=>{
        setUser({});
    })
}

return {
    user , error , signInUsingGoogle , logout
   }
}

export default useFirebase; 