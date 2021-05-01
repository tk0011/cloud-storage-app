import React , {useRef , useState} from 'react'
import {useAuth} from '../Contexts/AuthContext'

const SignUp = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const confirmPassRef = useRef()
    const {signup , currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const handleSubmit = async(e) => {
     e.preventDefault();

    if(passRef.current.value !== confirmPassRef.current.value ) {
      return  setError('Passwords dont match')
    }

    try {
        setError('')
        setLoading(true)
       await signup(emailRef.current.value, passRef.current.value)
    } catch {
        setError('There must be an error on our side. Please try again.')
    }
        setLoading(false)
    }

    return (
        <>
             <div className="container">
            <form className="card-panel sign-up-form" onSubmit={handleSubmit}>
                <h5 className="center-align">Register</h5>
               {error && <p style={{borderRadius:"3px", padding: '8px 5px', marginBottom: "0px"}} className="red darken-1 center-align white-text">Passwords don't match</p>} 
                <div className="input-field">
                <input id="email" type="email" className="validate" placeholder="Email"  required ref={emailRef} />
                </div>
                <div className="input-field">
                <input id="password" type="password" className="validate" placeholder="Password" required ref={passRef}/>
                </div>
                 <div className="input-field">
                <input id="password" type="password" className="validate" placeholder="Confirm Password" required ref={confirmPassRef}/>
                </div>
                <button disabled={loading} className="btn waves-effect waves-light"> Sign Up</button>
            </form> 
            </div>
        </>
    )
}

export default SignUp
