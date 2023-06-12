import React, {createContext, useEffect, useState}from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }


    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const userUpdateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{
                    email:currentUser.email,
                })
                .then(data=>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
           
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo ={
        signIn,
        user,
        loading,
        createUser,
        userUpdateProfile,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;