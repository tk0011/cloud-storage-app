import React , {useState, useContext, useEffect} from 'react'
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
       return auth.createUserWithEmailAndPassword(email,password)
    }

    const login = (email,password) => {
       return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
       return auth.signOut()
    }

    const resetPass = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe 
    }, [])


    const value = {
        currentUser,
        signup , 
        login ,
        logout ,
        resetPass
    }

    return (
     <AuthContext.Provider value={value}>
         {!loading && children}
     </AuthContext.Provider>
    )
}