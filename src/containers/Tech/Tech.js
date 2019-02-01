import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import classes from './Tech.module.scss';
import redux from '../../assets/redux.png';
import mongo from '../../assets/mongo.png';
import native from '../../assets/native.png';
import android from '../../assets/android.png';
import TechItem from './TechItem/TechItem';

import {
    IoLogoSass,
    IoLogoJavascript,
    IoLogoCss3,
    IoLogoHtml5,
    IoLogoNodejs,
    IoLogoNpm,
    IoIosBeer
} from "react-icons/io";
import {FaReact, FaLess} from "react-icons/fa";

class Tech extends Component {
    render() {
        return (
            <Transition
                unmountOnExit
                mountOnEnter
                in={this.props.isClicked}
                timeout={2000}>
                {state => {
                    return (
                        <div className={classes.Tech} style={{padding: "0 50px"}}>

                            <TechItem type={'html'} styles={classes.HTML}><IoLogoHtml5 className={classes.HTMLLogo}/></TechItem>
                            <TechItem type={'css'} delay={"0.5"} styles={classes.Css}><IoLogoCss3 className={classes.CssLogo}/></TechItem>
                            <TechItem type={'javascript'} delay={"0.5"} styles={classes.Java}><IoLogoJavascript className={classes.JavaLogo}/></TechItem>
                            <TechItem type={'node'} delay={"2"} styles={classes.Node}><IoLogoNodejs className={classes.NodeLogo}/></TechItem>
                            <TechItem type={'npm'} delay={"5"} styles={classes.Npm}><IoLogoNpm className={classes.NpmLogo}/></TechItem>
                            <TechItem type={'sass'} delay={"2"} styles={classes.Sass}><IoLogoSass className={classes.SassLogo}/></TechItem>
                            <TechItem type={'less'} delay={"5.5"} styles={classes.Less}><FaLess className={classes.LessLogo}/></TechItem>
                            <TechItem type={'react'} delay={"3"} styles={classes.React}><FaReact className={classes.ReactLogo}/></TechItem>
                            <TechItem type={'redux'} delay={"5.5"} styles={classes.Redux}><img alt={"logo"} src={redux} className={classes.ReduxLogo}/></TechItem>
                            <TechItem type={'reactNative'} delay={"5.5"} styles={classes.Native}><img alt={"logo"} src={native} className={classes.NativeLogo}/></TechItem>
                            <TechItem type={'mongodb'} delay={"5"} styles={classes.Mongo}><img alt={"logo"} src={mongo} className={classes.MongoLogo}/></TechItem>
                            <TechItem type={'androidStudio'} delay={"7"} styles={classes.Android}><img alt={"logo"} src={android} className={classes.AndroidLogo}/></TechItem>
                            <TechItem type={'beer'} delay={"9"} styles={classes.Beer}><IoIosBeer className={classes.BeerLogo}/></TechItem>
                            <svg className={classes.TechBox}>
                                <path className={classes.pathOne} stroke={'#e34f26'} fill="transparent" strokeWidth="4"
                                      d="M0 375 100 250 "/>
                                <path className={classes.pathOne} stroke={'#e34f26'} fill="transparent" strokeWidth="4"
                                      d="M0 425 100 550"/>

                                <path className={classes.pathTwo} stroke={'#264EE4'} fill="transparent" strokeWidth="4"
                                      d="M150 200 S 200 0 300 200 "/>
                                <path className={classes.pathTwo} stroke={'#f7df1e'} fill="transparent" strokeWidth="4"
                                      d="M150 570 S 200 450 400 500"/>
                                <path className={classes.pathTwo} stroke={'#f7df1e'} fill="transparent" strokeWidth="4"
                                      d="M150 600 S 200 650 150 700"/>
                                <path className={classes.pathThree} stroke={'#44883e'} fill="transparent"
                                      strokeWidth="4" d="M150 750 S 200 800 400 750 "/>
                                <path className={classes.pathThree} stroke={'#44883e'} fill="transparent"
                                      strokeWidth="4" d="M95 760 S 80 870 60 650 "/>

                                <path className={classes.pathThree} stroke={'#CE689A'} fill="transparent" strokeWidth="4"
                                      d="M350 200 360 200 S 400 50 700 140"/>

                                <path className={classes.pathThree} stroke={'#00d8ff'} fill="transparent"
                                      strokeWidth="4" d="M450 500 S 500 450 600 450 S 550 400 550 400"/>
                                <path className={classes.pathFour} stroke={'#00d8ff'} fill="transparent" strokeWidth="4"
                                      d="M490 375 S 450 350 450 300 S 600 350 650 350"/>
                                <path className={classes.pathThree} stroke={'#00d8ff'} fill="transparent"
                                      strokeWidth="4"
                                      d="M450 550 S 500 650 600 700 S 650 600 650 600 S 630 550 750 550"/>

                                <path className={classes.pathFour} stroke={'#1A3457'} fill="transparent" strokeWidth="4"
                                      d="M760 140 S 900 100 950 300"/>
                                <path className={classes.pathFour} stroke={'#7246B5'} fill="transparent" strokeWidth="4"
                                      d="M820 550 S 880 600 870 620 S 650 650 820 700 S 900 600 850 610 S 880 500 950 400  "/>
                                <path className={classes.pathFour} stroke={'#00aed2'} fill="transparent" strokeWidth="4"
                                      d="M490 375 S 450 350 450 300 S 600 350 650 350"/>
                            </svg>
                        </div>
                    )
                }}

            </Transition>
        )
    }
}

export default Tech;

