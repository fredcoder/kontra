import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {

    render() {
        
        return (<footer>
            <p>KONTRA © {new Date().getFullYear()}</p>
        </footer>)
    }
}

export default Footer;