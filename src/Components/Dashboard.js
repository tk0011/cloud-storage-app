import React, {useState} from 'react'
import {useAuth } from '../Contexts/AuthContext'
import {useHistory} from 'react-router-dom'

const Dashboard = () => {

    const {currentUser , logout} = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    const handleClick = async () => {
            setError('')
            try {
                await logout()
                history.push('/')
            } catch (error) {
                setError('Something went wrong')
            }
    }

    return (
        <div className="card-panel">
            {error && <p>{error}</p>}
           <p> Welcome to dashboard {currentUser.email}</p>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Dashboard
