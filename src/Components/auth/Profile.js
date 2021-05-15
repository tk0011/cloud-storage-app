import React, {useState} from 'react'
import {useAuth } from '../../Contexts/AuthContext'
import {useHistory, Link} from 'react-router-dom'

const Profile = () => {

    const {currentUser , logout} = useAuth()
    console.log(currentUser)
    const [error, setError] = useState('')
    const history = useHistory()

    const handleClick = async () => {
            setError('')
            try {
                await logout()
                history.push('/login')
            } catch (error) {
                setError('Something went wrong')
            }
    }

    return (
        <div className="card-panel">
            {error && <p>{error}</p>}
           <p> Welcome to dashboard {currentUser.displayName || currentUser.email}</p>
            <Link to='/updateProfile'>Update profile</Link>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Profile