import React, {Component} from 'react';
import classes from './SingleProject.module.scss';
import techPic from '../../assets/tech.jpg';
import projectsPic from '../../assets/projects.jpg';
import Text from '../../components/UI/Text/Text';

import InteractiveText from '../../components/InteractiveText/InteractiveText';
import redux from '../../assets/redux.png';
import jquery from '../../assets/jquery.png';
import ejs from '../../assets/ejs.png';

import {
    IoLogoSass,
    IoLogoJavascript,
    IoLogoCss3,
    IoLogoHtml5,
    IoLogoNodejs,
    IoLogoNpm,
} from "react-icons/io";
import {FaReact} from "react-icons/fa";
import pic1 from '../../assets/project__1/desktop.jpg';
import pic2 from '../../assets/project__2/desktop.jpg';
import pic3 from '../../assets/project__3/desktop.jpg';
import pic4 from '../../assets/project__4/desktop.jpg';
import pic5 from '../../assets/project__5/desktop.jpg';
import pic6 from '../../assets/project__6/desktop.jpg';
import pic7 from '../../assets/project__7/desktop.jpg';
import pic8 from '../../assets/project__8/desktop.jpg';


const PROJECTS = {
    movieBox: {
        pic: pic7,
        name: "Movie Box",
        tech: ["html", "css", "sass", "javascript", "react", "redux", "npm"],
        description: "Search movies and tv-shows, find latest upcoming top rated or in cinemas, see details about each movie and actors watch trailers and see ratings. All that with help of React Js and Redux and Movie API",
        web: "http://ivan.najdovski.me/movie_box/",
        git: "https://github.com/IvanNajdovski/Movie_Box_React"
    },
    portfolioTwo: {
        pic: pic8,
        name: "React Portfolio",
        tech: ["html", "css", "sass", "javascript", "react", "redux", "npm"],
        description: "Personal Portfolio build only with ReactJs and Redux, great animations with React-Transition-Group and React-pose",
        web: "http://ivan.najdovski.me/portfolio/",
        git: "https://github.com/IvanNajdovski/Portfolion_React"

    },
    weather: {
        pic: pic1,
        name: "Weather Application",
        tech: ["html", "css", "sass", "javascript", "jquery", "ejs", "node", "npm"],
        description: "Weather Application using DarkSky Api Geolocation and Image Api, Rendering data with EJS templates gives you current weather forecast wind speed and more, uses local-storage for saving favorite locations",
        web: "https://polar-brook-39410.herokuapp.com/?fbclid=IwAR335aD-nWzY7ArmomXoIKfqp1p29uyX5f2b3rd0_leiVDfSBqi-WHxSy64",
        git: "https://github.com/IvanNajdovski/Weather_Forecast"
    },
    burke: {
        pic: pic2,
        name: "Burke",
        tech: ["html", "css", "sass", "javascript", "jquery", "node", "npm"],
        description: "Movie page with loads of animations",
        web: "https://pacific-plains-38690.herokuapp.com/?fbclid=IwAR0E8Vnksjz5HCpYETW0BXSdTJwyKGfoqyePSObCCu3-I-GipxiRiNlfMmo",
        git: "https://github.com/IvanNajdovski/Tenk"
    },
    amsterdam: {
        pic: pic3,
        name: "Amsterdam",
        tech: ["html", "css", "sass", "javascript", "jquery", "node", "npm"],
        description: "Portfolio like page were you can list all projects and see details about each one",
        web: "https://quiet-tor-76718.herokuapp.com/?fbclid=IwAR2nxdAa8l3eONUjFMlJa-Rc1bkN3AlNJX80FXyJeVkpzSrlzXWB7Xq06Y8",
        git: "https://github.com/IvanNajdovski/Amsterdam__Page"
    },
    portfolioOne: {
        pic: pic6,
        name: "Portfolio",
        tech: ["html", "css", "sass", "javascript", "jquery", "node", "npm"],
        description: "Portfolio page were you can see details about my projects, Heroku () version has a websocket chat and minor error handling implemented just type my alias and can chat with me",
        web: "http://ivan.najdovski.me",
        heroku: "https://quiet-beyond-43532.herokuapp.com/",
        git: "https://github.com/IvanNajdovski/Portfolio-Page"
    },
    localised: {
        pic: pic4,
        name: 'Localised',
        tech: ["html", "css", "sass", "javascript", "react", "redux", "npm"],
        description: "One of my first sites build has cool animations using jQuery dom manipulation",
        web: "https://afternoon-chamber-39013.herokuapp.com/?fbclid=IwAR3d53esQRSMB6wFcUousEwCgDKxwkRyieAecsa73gAFFSYWuKztGxqpXjc",
        git: "https://github.com/IvanNajdovski/localised"
    },
    paris: {
        pic: pic5,
        name: "Paris Watch",
        tech: ["html", "css", "sass", "javascript", "jquery", "npm"],
        description: "Basically my first more challenging site build from scratch",
        web: "https://murmuring-caverns-57916.herokuapp.com/?fbclid=IwAR0E8Vnksjz5HCpYETW0BXSdTJwyKGfoqyePSObCCu3-I-GipxiRiNlfMmo",
        git: "https://github.com/IvanNajdovski/test-test"
    }
};

class SingleProject extends Component {
    constructor(props) {
        super(props)
        this.position = React.createRef()
        this.positionParent = React.createRef()
    }

    state = {
        project: null,
        active: false,
        side: null,
        picture: {
            picTop: null,
            picLeft: null,
            picHeight: null,
            picWidth: null,
            middleX: null,
            middleY: null
        },
        rotateX: null,
        rotateY: null
    };

    componentDidMount() {

        const project = this.props.match.params.project;
        this.setState({project: project})
        setTimeout(() => {
            this.setState({active: true})
        }, 500)
    }

    componentDidUpdate() {
        if (this.positionParent.current.offsetTop !== this.state.picture.picTop || this.position.current.clientHeight !== this.state.picture.picHeight) {
            console.log("[CURRENT]", this.positionParent.current.offsetTop)
            this.setState({
                picture: {
                    picWidth: this.position.current.clientWidth,
                    picHeight: this.position.current.clientHeight,
                    picTop: this.positionParent.current.offsetTop,
                    picLeft: this.position.current.offsetLeft,
                    middleX: this.position.current.offsetLeft + (this.position.current.clientWidth / 2),
                    middleY: this.positionParent.current.offsetTop + (this.position.current.clientHeight / 2),
                }

            })
        }
        console.log(this.state)

    }

    onChangeClassHandler = () => {
        this.setState({side: "left"})
    };
    onChangeClassHandlerRight = () => {
        this.setState({side: "right"})
    };
    onHoverHandler = (e) => {
        const rotateX = ((e.clientX - this.state.picture.middleX)/ this.state.picture.picWidth*2)
        const rotateY = ((e.clientY - this.state.picture.middleY)/ this.state.picture.picHeight*2)
        console.log("Y",rotateY, "X", e.screenX)
        this.setState({rotateX: rotateX, rotateY: rotateY})
    };
    //rotateX(${this.state.rotateY*10}deg)`
    render() {
        let tech = null;
        let project = null;
        if (this.state.project) {
            const cssStyles = [classes.Logo]
            if (this.state.active) {
                cssStyles.push(classes.LogoActive)
            }
            tech = PROJECTS[this.state.project].tech.map((val, index) => {
                const delay = {transitionDelay: index * 0.2 + "s"};
                switch (val) {
                    case "html":
                        return <IoLogoHtml5 key={index} style={{color: "#e34f26", ...delay}}
                                            className={cssStyles.join(" ")}/>
                    case "css":
                        return <IoLogoCss3 key={index} style={{color: "#264EE4", ...delay}}
                                           className={cssStyles.join(" ")}/>
                    case "sass":
                        return <IoLogoSass key={index} style={{color: "#CE689A", ...delay}}
                                           className={cssStyles.join(" ")}/>
                    case "react":
                        return <FaReact key={index} style={{color: "#00d8ff", ...delay}}
                                        className={cssStyles.join(" ")}/>
                    case "npm":
                        return <IoLogoNpm key={index} style={{color: "#cb3837", ...delay}}
                                          className={cssStyles.join(" ")}/>
                    case 'redux':
                        return <div key={index} style={{...delay}} className={cssStyles.join(" ")}><img alt={"Logo"}
                                                                                                        src={redux}/>
                        </div>
                    case "node":
                        return <IoLogoNodejs key={index} style={{color: "#44883e", ...delay}}
                                             className={cssStyles.join(" ")}/>
                    case "javascript":
                        return <IoLogoJavascript key={index} style={{color: "#f7df1e", ...delay}}
                                                 className={cssStyles.join(" ")}/>
                    case "ejs":
                        return <div key={index} className={cssStyles.join(" ")} style={{...delay}}><img alt={"Logo"}
                                                                                                        src={ejs}/>
                        </div>
                    case "jquery":
                        return <div key={index} className={cssStyles.join(" ")} style={{...delay}}><img alt={"Logo"}
                                                                                                        src={jquery}/>
                        </div>
                    default:
                        return null
                }
            });
            project = (
                <React.Fragment>
                    <a onMouseEnter={this.onChangeClassHandler} href={PROJECTS[this.state.project].git}><Text project side={"5%"} top={"85%"} state={this.state.side} left/></a>
                    <a onMouseEnter={this.onChangeClassHandlerRight} href={PROJECTS[this.state.project].web}><Text project side={"5%"} top={"85%"} state={this.state.side}/></a>
                    <div className={classes.ContentLeft}
                         onMouseEnter={this.onChangeClassHandler}
                         style={{backgroundImage: `linear-gradient( to bottom, rgba(0,0,0, .8) 0%,rgba(0,0,0, .8) 100%), url(${techPic})`}}>

                    </div>
                    <div
                        className={classes.ContentRight}
                        onMouseEnter={this.onChangeClassHandlerRight}
                        style={{backgroundImage: `linear-gradient( to bottom, rgba(255,255,255, .8) 0%,rgba(255,255,255, .8) 100%), url(${projectsPic})`}}>

                    </div>
                    <InteractiveText top={'80px'} text={PROJECTS[this.state.project].name}/>
                    <div className={classes.Content} ref={this.positionParent}>
                        <div
                            style={{transform: `rotateY(${this.state.rotateX*15}deg) rotateX(${this.state.rotateY*15}deg)` }}
                            ref={this.position}
                            onMouseMove={this.onHoverHandler}
                            className={classes.Content__imgWrapper}>
                            <img

                                alt={"project"}
                                src={PROJECTS[this.state.project].pic}/>
                        </div>
                        <div className={classes.Content__Tech}>
                            {tech}
                        </div>
                        <div className={classes.Content__Text}>
                            <h3>{PROJECTS[this.state.project].description}</h3>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        return (
            <div className={classes.SingleProject}>

                {project}
            </div>
        )
    }
}

export default SingleProject;