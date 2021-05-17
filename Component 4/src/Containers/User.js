import React from 'react'

const User = (props) => {
    let display = <p className='user-details'>Enter valid credentials</p>
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn)
        display = <div className='user-details'>
            <p>User Name : {props.username}</p>
            <p>Password : {props.password}</p>
        </div>
    return (
        <div>
            {display}
        </div>
    )
}

export default User
