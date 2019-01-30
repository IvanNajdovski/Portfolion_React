import React from 'react';
import classes from './Contact.module.scss';

const contact = (props) => {
    return (
        <div onClick={props.clicked} className={classes.Contact}>
            <div className={classes.Contact__icon}>
                <div className={classes.Contact__Wrapper}><p>explore</p></div>
                {props.children}
            </div>
        </div>
    )
};

export default contact;