import React from 'react';
import classes from './Text.module.scss';
const text = (props) => {
    if(props.left){
        let cssClasses = [classes.Bg];
            let otherClass = props.state === "left" ? classes.BgActive : null;
                cssClasses.push(otherClass);
        return(
            <div style={props.clicked === "right" ? {left: "2%"} : null} className={classes.Wrapper}>
                <div className={cssClasses.join(" ")}>
                    <div className={classes.Text}></div>
                </div>
            </div>
        )
    }else{
        let cssClasses = [classes.BgRight];
        let otherClass = props.state === "right" ? classes.BgRightActive : null;
        cssClasses.push(otherClass);
        return(
            <div style={props.clicked === "left" ? {right: "2%"} : null} className={classes.WrapperRight}>
                <div className={cssClasses.join(" ")}>
                    <div className={classes.TextRight}></div>
                </div>
            </div>
        )
    }

};
export default text;