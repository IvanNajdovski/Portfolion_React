import React, { Component } from 'react';
import classes from './Header.module.scss';

class Header extends Component {
    render(){
        return(
            <header className={classes.Header}>
                <nav>
                    <ul>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </nav>
                {this.props.children}
            </header>
        )
    }
}

export default Header;