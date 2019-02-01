import React, {Component} from 'react';
import classes from './Layout.module.scss';
import {connect} from 'react-redux';

import MainContent from '../MainContent/MainContent';
import InteractiveText from '../../components/InteractiveText/InteractiveText';
import Button from '../../components/UI/Button/Button';


const QUESTIONS = {
    personalFacts: ["Im a developer afraid of clowns", "Code not working??? You no sleeping", "Waking up in the middle of the night with the solution in your head", "4Gb ram Laptop and working with Android Studio :("],
    whyJavascript: ["Not everyone can learn Javascript... Hold my Beer", "Css and Html no problem. Oh wait that's Canvas", "The moment when i realised i can do everything with JS BOOM", "Spaghetti code? Yes I Have It"],
    random: ["Hide and seek champion  ;  since 1958", "I just saw my life flash before my eyes and all I could see was a close tag…", "Debugging: Removing the needles from the haystack.", "In order to understand recursion you must first understand recursion.", "Programming is like sex. Make one mistake and you end up supporting it for the rest of your life.", "What did the boolean say to the integer? You can't handle the truth."]
};

class Layout extends Component {
    state = {
        text: "Ivan Personal Page",
        textLength: 0,
        width: 1,
        height: 1,
        active: false,
        pathIndex: 0
    };

    componentDidMount() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }
    componentDidUpdate(nextProps, nextState) {
        if(this.state.width !== nextState.width){
            this.setState({width: window.innerWidth, height: window.innerHeight});
        }

    }

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
                <li className={classes.List__Item} key={index} onClick={() => this.onTextChangeHandler(val)}
                    style={{}}>{val}</li>
            )
        });
        return (
            <React.Fragment>
                <MainContent/>
                {this.props.focus ? null :
                    <React.Fragment>
                        <InteractiveText
                            top={"30%"}
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        focus: state.main.clicked
    }
};


export default connect(mapStateToProps)(Layout);


