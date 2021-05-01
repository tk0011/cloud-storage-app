import React from 'react'

const SignIn = () => {
    return (
        <>
    <div className="container">
    <form className="card-panel sign-up-form">
        <h5 className="center-align">Sign In</h5>
        <div className="input-field">
          <input id="email" type="email" className="validate" placeholder="Email" />
        </div>
        <div className="input-field">
          <input id="password" type="password" className="validate"  placeholder="Password"/>
        </div>
        <button className="btn waves-effect waves-light"> Login</button>
    </form>
</div>
        </>
    )
}

export default SignIn
