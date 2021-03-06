import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../../Contexts/AuthContext'

const PrivateRoute = ({component: Component, ...args}) => {
    const {currentUser} = useAuth()

    return (
        <Route {...args}
            render = {(props) => {
              return   currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }} 

        />
            
    )
}

export default PrivateRoute
