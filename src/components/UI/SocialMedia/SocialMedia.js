import React from 'react';
import classes from './SocialMedia.module.scss';

const socialMedia = (props) => {
    return(
        <div style={props.active ? {transform: `translateX(${props.distance}px) rotate(${props.direction}360deg`} : null } className={classes.SocialMedia}>{props.children}</div>
    )
};

export default socialMedia;