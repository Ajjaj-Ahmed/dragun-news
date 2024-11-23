import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);

    // create user
    const createNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout user
    const logOutUser = ()=>{
        return signOut(auth)
    }

    // login user
    const SignInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const authInfo={
        user, setUser,createNewUser,logOutUser,SignInUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;