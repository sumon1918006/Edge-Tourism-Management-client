import { createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged,  signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    
    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //logout
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }



    //signInEmail
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

     //onAuth statechange 

     useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in on auth',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
     },[])


    const authInfo ={
        user,
        loading,
        createUser,
        logOut,
        signIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;