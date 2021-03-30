import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from '../../redux/store/store.js';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../containers/Home';
import Women from '../containers/Women';
import Men from '../containers/Men';
import Kids from '../containers/Kids';
import Accessories from '../containers/Accessories';

class Router extends Component {

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                    <Route exact path="/Women" render={props =>
                        <React.Fragment>
                            <Header />
                            <Women {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Men" render={props =>
                        <React.Fragment>
                            <Header />
                            <Men {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Kids" render={props =>
                        <React.Fragment>
                            <Header />
                            <Kids {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                    <Route exact path="/Accessories" render={props =>
                        <React.Fragment>
                            <Header />
                            <Accessories {...props}/>
                            <Footer />
                        </React.Fragment>
                    } />
                </Switch>
            </ BrowserRouter>
        );
    }
}

export default Router;