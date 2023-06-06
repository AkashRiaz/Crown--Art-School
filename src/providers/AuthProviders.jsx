import React, {createContext}from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProviders = ({children}) => {

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const authInfo ={
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;