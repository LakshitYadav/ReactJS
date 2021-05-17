import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ImageCarousel from './ImageCarousel'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'
import User from './User'


class Main extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            isLoggedIn: false
        }
        this.onDisplay = this.onDisplay.bind(this)
    }

    onDisplay = (userName, password) => {
        if(userName && password)
            this.setState({
                username: userName,
                password: password,
                isLoggedIn: true
            })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <ImageCarousel />
                        </Route>

                        <Route path='/login'>
                            <LoginPage onDisplay={this.onDisplay}/>
                            <User username={this.state.username} password={this.state.password} isLoggedIn={this.state.isLoggedIn}/>
                        </Route>

                        <Route path='/user'>
                            <User />
                        </Route>
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default Main;