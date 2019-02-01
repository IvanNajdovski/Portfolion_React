import React from 'react';
import Letter from './Letter/Letter';
import classes from './InteractiveText.module.scss';



const interactiveText = (props) => {
    const text = props.text.split("").map((letter, index) => {
        const valueX = Math.random() < 0.5 ? "-" : "+";
        const valueY = Math.random() < 0.5 ? "-" : "+";

         return (
            <Letter
                key={index}
                animation={index < props.length ? true : false}
                transition={index * 0.03}
                height={props.height}
                width={props.width}
                valueX={valueX}
                valueY={valueY}
                value={letter}
                active={props.active}
            >{letter}</Letter>
        )
    });
    return (
        <div className={classes.Interactive} style={{top: `${props.top}`}}>
            <div>
                {text}
            </div>
        </div>
    )
};
export default interactiveText;