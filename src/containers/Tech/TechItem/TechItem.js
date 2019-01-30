import React, {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import classes from './TechItem.module.scss';
import BackDrop from '../../../components/UI/BackDrop/BackDrop';

const TYPES = {
    html: {
        name: 'HTML - Hypertext Markup Language',
        type: 'Standard markup language for Web ',
        expertise: "Advanced"
    },
    css: {
        name: 'CSS - Cascading Style Sheets',
        type: 'Make things look pretty',
        expertise: "Advanced"
    },
    javascript: {
        name: 'JavaScript',
        type: 'Programming language of HTML and the Web',
        expertise: 'Advanced'
    },
    node: {
        name: 'NodeJs',
        type: 'Javascript Back-End executing JavaScript code server-side code',
        expertise: 'Moderate'
    },
    npm: {
        name: 'NPM - Node Package Manager',
        type: 'World\'s largest software registry',
        expertise: 'Search and Learn'
    },
    sass: {
        name: 'SASS - Syntactically Awesome Style Sheets',
        type: "CSS preprocessor",
        expertise: 'Pro'
    },
    less: {
        name: 'LESS - Leaner Style Sheets',
        type: "CSS preprocessor",
        expertise: 'Novice'
    },
    react: {
        name: 'ReactJs',
        type: 'Javascript Library',
        expertise: 'Advanced'
    },
    redux: {
        name: 'Redux',
        type: "State Managing Library",
        expertise: 'Advanced'
    },
    reactNative: {
        name: 'React-Native',
        type: 'React Library for developing Native applications',
        expertise: 'Moderate'
    },
    mongodb: {
        name: 'Mongo DB',
        type: 'No SQL Database',
        expertise: 'Novice'
    },
    androidStudio: {
        name: 'Android Studio',
        type: "Official integrated development environment (IDE) for Android application development",
        expertise: 'Moderate'
    },
    beer: {
        name: 'Beer',
        type: 'Liquid',
        expertise: 'Pro'
    }
}

class TechItem extends Component {
    state = {
        mounted: false,
        first: false,
        focused: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted: true, first: true})
        }, 500)
    }

    onFocusedHandler = (e) => {
        e.stopPropagation();
        this.setState(prevState => {
            return {
                focused: !prevState.focused,
                first: false
            }
        })
    };

    render() {
        let text = null;
        if (this.state.focused) {
            text = (
                <div className={classes.Text__Wrapper}>
                    <h3 className={classes.Text}>Name: <span>{TYPES[this.props.type].name}</span></h3>
                    <h3 className={classes.Text}>Type: <span>{TYPES[this.props.type].type}</span></h3>
                    <h2 className={classes.Text}>Expertise: <span>{TYPES[this.props.type].expertise}</span></h2>
                </div>
            )
        }
        return (
            <Transition
                unmountOnExit
                mountOnEnter
                in={this.state.mounted}
                timeout={2000}>
                {state => {
                    const cssClass = [classes.TechItem]
                    cssClass.push(this.props.styles)
                    if (state === "entered") {
                        cssClass.push(classes.TechItemActive)
                    } else if (state === "exiting") {
                        cssClass.push(classes.TechItemExit)
                    }
                    console.log(state)
                    return (
                        <React.Fragment>
                            {this.state.focused ? <BackDrop clicked={this.onFocusedHandler}/> : null}
                            <div onClick={this.onFocusedHandler} style={this.state.focused ? {
                                zIndex: "250",
                                transitionDelay: "0s",
                                top: "40%",
                                left: "60%",
                                height: "500px",
                                width: "500px"
                            } : this.state.first ? {transitionDelay: `${this.props.delay}s`} : {transitionDelay: `0s`}}
                                 className={cssClass.join(" ")}>{this.props.children}</div>
                            {text}
                        </React.Fragment>
                    )
                }}

            </Transition>
        )
    }
}

export default TechItem;