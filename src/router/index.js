import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from '../../redux/store/store.js';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../containers/Home';
import Clothing from '../containers/Clothing';
import Contact from '../containers/Contact';

class Router extends Component {

    render() {
        return (
            < BrowserRouter >
                <Switch>
                    <Route exact path="/" render={props =>
                        <React.Fragment>
                            <Header />
                            <Home {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Home" render={props =>
                        <React.Fragment>
                            <Header />
                            <Home {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Clothing" render={props =>
                        <React.Fragment>
                            <Header />
                            <Clothing {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Contact" render={props =>
                        <React.Fragment>
                            <Header />
                            <Contact {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                </Switch>
            </ BrowserRouter>
        );
    }
}

export default Router;