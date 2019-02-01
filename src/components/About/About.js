import React from 'react';
import classes from './About.module.scss';

const about = (props) => {
    const cssClass = [classes.About];
    if(props.active === true){
        cssClass.push(classes.AboutActive)
    }else if(props.active === false){
        cssClass.push(classes.AboutClose)
    }
    return(
        <div className={cssClass.join(" ")}>
            <div>
                <h1>Hello</h1>
            </div>
            <div>
                <p>Im Ivan Najdovski full-stack web Developer, Quick summary rollback to December 2017. Me doing my own thing going out with some friends to the place were the serve the best beer in town, just kidding, in Skopje the beer is the same everywhere... At some point a friend of mine said "Programing is hard there's no way we can learn" ... so here i am 12 months later learning reading and spending loads of my time in order to improve myself and trying to understand ever more-complex techniques </p>
                <p>Contact me ivannajdovski1987@gmail.com</p>
            </div>
        </div>
    )
};
export default about;