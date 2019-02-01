import React from 'react';
import classes from './Text.module.scss';
const text = (props) => {
    if(props.left){
        let cssText = classes.Text;
        if(props.project){
            cssText = classes.Project;
        }
        let cssClasses = [classes.Bg];
            let otherClass = props.state === "left" ? classes.BgActive : null;
                cssClasses.push(otherClass);
        return(
            <div style={props.clicked === "right" ? {left: "2%", top: `${props.top}`} : {top: `${props.top}`, left: `${props.side}`}} className={classes.Wrapper}>
                <div className={cssClasses.join(" ")}>
                    <div className={cssText}></div>
                </div>
            </div>
        )
    }else{
        let cssText = classes.TextRight;
        if(props.project){
            cssText = classes.ProjectRight;
        }
        let cssClasses = [classes.BgRight];
        let otherClass = props.state === "right" ? classes.BgRightActive : null;
        cssClasses.push(otherClass);
        return(
            <div style={props.clicked === "left" ? {right: "2%", top: `${props.top}`} : {top: `${props.top}`, right: `${props.side}`}} className={classes.WrapperRight}>
                <div className={cssClasses.join(" ")}>
                    <div className={cssText}></div>
                </div>
            </div>
        )
    }

};
export default text;