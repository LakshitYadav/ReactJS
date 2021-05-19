import React, { Component } from 'react'

class User extends Component{
    render() {
        return (
            <div>
                <div className='user-details'>
                    <h4 className="mt-5">Hello {this.props.username}, you have successfully logged in</h4>
                </div>
            </div>
        )
    }
}

export default User
