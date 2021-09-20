import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    state = {
        isExpanded: false
    }

    toggleMenu = () => {
        let { isExpanded } = this.state;
        let newExpanded = isExpanded ? false : true
        this.setState({ isExpanded: newExpanded });
        console.log("newExpanded: ",newExpanded);
    }

    render() {
        let { isExpanded } = this.state;

        return (<header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KONTRA*</a>

                    <span className="header-search-icon collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#searchCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <SearchIcon />
                    </span>
                    <span className="header-shopping-cart-icon">
                        <LocalMallRoundedIcon />
                    </span>
                    {/* <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                    <div id="hamburguer-menu"
                        className={isExpanded ? " open" : " collapsed"}
                        // data-bs-toggle="collapse"
                        // data-bs-target="#navbarCollapse"
                        // aria-controls="navbarCollapse"
                        // aria-expanded="false"
                        // aria-label="Toggle navigation"
                        data-bs-toggle="collapsed"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded={isExpanded}
                        aria-label="Toggle navigation"
                        onClick={({ target }) => { 
                             target.classList.toggle('open'); 
                            console.log("target: ", target); 
                            this.toggleMenu()
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar-collapse collapse" id="searchCollapse" >
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                    <div className={`navbar-collapse collapse ${isExpanded ? "show" : ""}`} id="navbarCollapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0" onClick={this.toggleMenu}>
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Women" className="nav-link" >Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Men" className="nav-link" >Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Kids" className="nav-link" >Kids</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Accessories" className="nav-link" >Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
        )
    }
}

export default Header;

