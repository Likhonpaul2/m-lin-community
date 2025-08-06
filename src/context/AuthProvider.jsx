import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // sign in with google 
    const SignInWithGoogle = () => {
        setLoading(false);
        return signInWithPopup(auth, GoogleProvider)
    }

    // signIn with email & pass 
    const SignInEmailAndPass = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // create user with email  and pass  
    const CreateUserWithEmailAndPassword = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user photo and name 
    const UpdateUserPhotoAndName = (D_Name, P_URL) => {
        setLoading(false);
        return updateProfile(auth.currentUser, {
            displayName: D_Name, photoURL: P_URL
        })
    }
    // signout 
    const SignOut = () => {
        setLoading(false);
        return signOut(auth);
    }



    // Auth Holder
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(true);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const userInfo = {
        user,
        loading,
        SignInWithGoogle,
        SignInEmailAndPass,
        CreateUserWithEmailAndPassword,
        UpdateUserPhotoAndName,
        SignOut,

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;