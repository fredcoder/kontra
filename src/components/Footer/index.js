import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import './styles.css';

class Footer extends Component {

    render() {

        return (<footer>
            <p>KONTRA © {new Date().getFullYear()}</p>
            <div className="footer-icons">
                <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
            </div>
        </footer>)
    }
}

export default Footer;