import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import ImageCarousel from './ImageCarousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'
import User from './User'


class Main extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            isLoggedIn: false
        }
        this.onDisplayHandler = this.onDisplayHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
    }

    logoutHandler = () => {
        this.setState({
            username: null,
            isLoggedIn: false
        })
    }

    onDisplayHandler = (userName) => {
        if (userName)
            this.setState({
                username: userName,
                isLoggedIn: true
            })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header username={this.state.username} isLoggedIn={this.state.isLoggedIn} onLogout={this.logoutHandler}/>
                    <Switch>

                        {/* <Route exact path='/'>
                            <ImageCarousel />
                        </Route> */}

                        <Route path='/'>
                            {this.state.isLoggedIn ?
                                <User username={this.state.username} isLoggedIn={this.state.isLoggedIn}/>
                                :
                                <LoginPage onDisplay={this.onDisplayHandler} />
                            }
                        </Route>

                        {/* <Route path='/user'>
                            <User />
                        </Route> */}

                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default Main;