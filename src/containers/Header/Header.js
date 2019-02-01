import React, { Component } from 'react';
import classes from './Header.module.scss';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    onGoHomeHandler = () => {
        this.props.history.push("/")
    };
    render(){

        return(
            <header className={classes.Header}>
                <nav>
                    <ul>
                        <li onClick={this.onGoHomeHandler}>Go Home</li>
                        <li onClick={this.props.clicked}>About</li>
                    </ul>
                </nav>
                {this.props.children}
            </header>
        )
    }
}

export default withRouter(Header);