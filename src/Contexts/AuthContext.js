import React , {useState, useContext, useEffect} from 'react'
import {auth} from '../Firebase'

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()

    const signup = (email, password) => {
        auth.createUserWithEmailAndPassword(email,password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe 
    }, [])


    const value = {
        currentUser,
        signup
    }

    return (
     <AuthContext.Provider value={value}>
         {children}
     </AuthContext.Provider>
    )
}