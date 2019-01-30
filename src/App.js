import React, {Component} from 'react';
import classes from './App.module.scss';
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa';
import {connect} from 'react-redux';


import Contact from './components/Contact/Contact';
import SocialMedia from './components/UI/SocialMedia/SocialMedia';
import MainContent from './containers/MainContent/MainContent';
import InteractiveText from './components/InteractiveText/InteractiveText';
import Header from './containers/Header/Header';
import Button from './components/UI/Button/Button';

import {updateState} from './store/actions/actionsOne';



const QUESTIONS = {
    personalFacts: ["Im a developer afraid of clowns", "Code not working??? You no sleeping", "Waking up in the middle of the night with the solution in your head", "4Gb ram Laptop and working with Android Studio :("],
    whyJavascript: ["Not everyone can learn Javascript... Hold my Beer", "Css and Html no problem. Oh wait that's Canvas", "The moment when i realised i can do everything with JS BOOM", "Spaghetti code? Yes I Have It"],
    random: ["Hide and seek champion  ;  since 1958", "I just saw my life flash before my eyes and all I could see was a close tag…", "Debugging: Removing the needles from the haystack.", "In order to understand recursion you must first understand recursion.", "Programming is like sex. Make one mistake and you end up supporting it for the rest of your life.", "What did the boolean say to the integer? You can't handle the truth."]
}

class App extends Component {


    state = {
        text: "Ivan Personal Page",
        textLength: 0,
        width: 1,
        height: 1,
        initialAnimate: false,
        active: false,
        iconsActive: false,
        pathIndex: 0
    };

    componentDidMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    onMediaHandler = () => {
        this.setState(prevState => {
            return {iconsActive: !prevState.iconsActive, initialAnimate: true}
        });
    };
    onChangeHandler = () => {
        this.setState(prevState => {
            return {
                active: true,
            }
        })

    };

    onTextChangeHandler = (val) => {
        this.setState({text: QUESTIONS[val][Math.floor(Math.random() * QUESTIONS[val].length)], active: false})
    };

    render() {
        let questions = Object.keys(QUESTIONS).map((val, index) => {
            return (
                <li className={classes.List__Item} key={index} onClick={() => this.onTextChangeHandler(val)} style={{

                }}>{val}</li>
            )
        });

        return (

            <div className={classes.App}>
                <Header>
                    <Contact clicked={this.onMediaHandler}>
                        <SocialMedia direction={"-"} distance={-200} active={this.state.iconsActive}><a style={this.state.iconsActive ? null : {pointerEvents: "none"}} href={"https://github.com/IvanNajdovski"}><FaGithub
                            style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                        <SocialMedia direction={"-"} distance={-100} active={this.state.iconsActive}><a style={this.state.iconsActive ? null : {pointerEvents: "none"}} href={"https://www.facebook.com/ivan.najdovski.7"}><FaFacebook
                            style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                        <SocialMedia direction={"+"} distance={100} active={this.state.iconsActive}><a style={this.state.iconsActive ? null : {pointerEvents: "none"}} href={"https://www.instagram.com/ivannajdovski/?hl=en"}><FaInstagram
                            style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                        <SocialMedia direction={"+"} distance={200} active={this.state.iconsActive}><a style={this.state.iconsActive ? null : {pointerEvents: "none"}} href={"https://www.linkedin.com/in/ivan-najdovski-4985a3167/"}><FaLinkedin
                            style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                    </Contact>
                </Header>
                <MainContent/>
                {this.props.focus ? null :
                    <React.Fragment>
                        <InteractiveText
                            length={this.state.textLength}
                            initalAnimate={this.state.initialAnimate}
                            text={this.state.text}
                            height={this.state.height}
                            width={this.state.width}
                            active={this.state.active}/>
                        < Button clicked={this.onChangeHandler}>Fun facts about me</Button>
                        <ul className={classes.List}>
                            {this.state.active ? questions : null}
                        </ul>
                    </React.Fragment>
                }


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        focus: state.main.clicked
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateState: (number) => dispatch(updateState(number)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


