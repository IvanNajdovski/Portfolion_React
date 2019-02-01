import React from 'react';
import classes from './BackDrop.module.scss';

const backDrop = (props) => {
    const cssClass = [classes.BackDrop];
    if(props.focused){
        cssClass.push(classes.BackDropActive)
    }
    return(
        <div  onClick={props.clicked} className={cssClass.join(" ")}></div>
    )
};
export default backDrop;