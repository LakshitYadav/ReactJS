import React from 'react'
import '../stylesheets/LoginPage.css'

const LoginPage = (props) => {
    return (
        <div className='full-page'>
            <main className="form-signin">
                <form >
                    <h1 className="h3 mb-3 fw-normal">Enter Valid Credentials</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="userID" placeholder="UserName" />
                        <label htmlFor="floatingInput">Username</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" 
                    type="button" 
                    onClick={() => {
                        props.onDisplay(document.getElementById('userID').value,
                        document.getElementById('password').value)
                    }
                    }>DISPLAY</button>
                </form>
            </main>
        </div>
    )
}

export default LoginPage
