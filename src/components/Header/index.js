import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import SearchIcon from '@material-ui/icons/Search';
import './styles.css';

class Header extends Component {

    render() {

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
                        className=" collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={({ target }) => { target.classList.toggle('open') }}
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
                    <div className="navbar-collapse collapse" id="navbarCollapse" >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Women">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Men">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Kids">Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Accessories">Accessories</a>
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

