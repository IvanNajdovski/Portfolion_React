import React from 'react';
import classes from './Button.module.scss';

const button = (props) => {
    return(
        <div style={props.styles} className={classes.ButtonWrapper}>
        <button onClick={props.clicked} className={classes.Button}>{props.children}</button>
        </div>
    )
};
export default button;