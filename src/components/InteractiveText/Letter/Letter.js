import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classes from './Letter.module.scss';
import {connect} from 'react-redux';
import posed from 'react-pose';
import Transition from 'react-transition-group/Transition';


const Span = posed.div({
    visible: {opacity: 1, transition: {opacity: {ease: 'easeOut', duration: 300}}},
    hidden: {opacity: 0, transition: {opacity: {ease: 'easeOut', duration: 300}}}
});

class Letter extends Component {
    state = {
        left: null,
        top: null,
        active: false
    };

    componentDidMount() {
        let rect = ReactDOM.findDOMNode(this)
            .getBoundingClientRect();
        this.setState({left: rect.left, top: rect.top})
        setTimeout(() => {
            this.setState({active: true})
        }, 1000)
    }

    render() {
        if (this.props.animation) {
            const cssClass = [classes.Letters];
            if (this.state.active) {
                cssClass.push(classes.Letters__Active)
            } else if (this.props.active) {
                cssClass.push(classes.Letters__Exit)
            }
            return (
                <Transition
                    unmountOnExit
                    mountOnEnter
                    in={true}
                    timeout={1000}>
                    {state => {
                        console.log(state)
                        if (state === "exiting") {
                            cssClass.push(classes.Letters__Exit)
                        }

                        return (<span
                            style={this.props.active ? {
                                transitionDelay: `${this.props.transition}s`,
                                transform: `translate(${this.props.valueX === "-" ? -Math.random() * this.state.left : Math.random() * (this.props.width - this.state.left - 70)}px, ${this.props.valueY === "-" ? -Math.random() * this.state.top : Math.random() * (this.props.height - this.state.top - 70)}px) rotate(${Math.random() * 720}deg)`
                            } : {transitionDelay: `${this.props.transition}s`}}
                            className={cssClass.join(" ")}
                        >{this.props.value}</span>)
                    }}
                </Transition>
            )
        } else {
            return (
                <Span
                    pose={!this.props.active ? 'visible' : 'hidden'}
                    style={this.props.active ? {
                        transitionDelay: `${this.props.transition}s`,
                        transform: `translate(${this.props.valueX === "-" ? -Math.random() * this.state.left : Math.random() * (this.props.width - this.state.left - 70)}px, ${this.props.valueY === "-" ? -Math.random() * this.state.top : Math.random() * (this.props.height - this.state.top - 70)}px) rotate(${Math.random() * 720}deg)`
                    } : {transitionDelay: `${this.props.transition}s`}}
                    className={classes.Letters}
                >{this.props.value}</Span>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        activeIn: state.one.activeIn
    }
};

export default connect(mapStateToProps)(Letter);