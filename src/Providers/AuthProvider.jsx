/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// context and auth
export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // states and loaders
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    // catching states and getting current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe;
        }
    }, [])

    // google user
    const googleProvider = new GoogleAuthProvider();
    const googleRegister = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in existing user
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out existing user
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }


    // context value
    const authInfo = {
        user,
        loading,
        googleRegister,
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;