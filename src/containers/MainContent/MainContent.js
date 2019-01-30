import React, { Component } from 'react';
import { focusedProjects, focusedTech } from '../../store/actions';
import { connect } from 'react-redux';
import classes from './MainContent.module.scss';
import projects from '../../assets/projects.jpg';
import tech from '../../assets/tech.jpg';
import Text from '../../components/UI/Text/Text';
import Projects from '../Projects/Projects';
import Tech from '../Tech/Tech';

class MainContent extends Component{
    state = {
        side: null,
        //clicked: null
    };
    onChangeClassHandler = () => {
        this.setState({side:"left"})
    };
    onChangeClassHandlerRight = () => {
        this.setState({side:"right"})
    };
    onClickedHandler = () => {
        this.props.focusedTech()
        //this.setState({clicked: this.state.clicked ? this.state.clicked === "left" ? "left" : null : "left"})
    };
    onClickedHandlerRight = () => {
        this.props.focusedProjects()
        //this.setState({clicked: this.state.clicked ? null : "right"})
    };
    render(){
        let cssClassLeft = [classes.ContentLeft];
        let cssClassRight = [classes.ContentRight];
        let whatClassLeft = null;
        let whatClassRight = null;
        if(this.props.clicked === "left"){
            whatClassLeft = classes.ContentLeftClicked;
            whatClassRight = classes.ContentRightOther;
        }else if(this.props.clicked === "right"){
            whatClassLeft = classes.ContentLeftOther;
            whatClassRight = classes.ContentRightClicked;
        }else if(this.state.side === "left"){
            whatClassLeft = classes.ContentLeftActive;
            whatClassRight = classes.ContentRightUnactive;
        }else if(this.state.side === "right"){
            whatClassLeft = classes.ContentLeftUnactive;
            whatClassRight = classes.ContentRightActive;
        }
        cssClassLeft.push(whatClassLeft);
        cssClassRight.push(whatClassRight);
        return(
            <div className={classes.MainContent}>
                <div
                    onClick={this.onClickedHandler}
                    style={{backgroundImage: `linear-gradient( to bottom, rgba(0,0,0, .8) 0%,rgba(0,0,0, .8) 100%), url(${tech})`}}
                    onMouseEnter={this.onChangeClassHandler}
                    className={cssClassLeft.join(" ")}>{this.props.clicked === "left" ? null : <Text state={this.state.side} clicked={this.props.clicked} left />}{this.props.clicked === "left" ? <Tech isClicked={this.props.clicked === "left"}/> : null}</div>

                <div
                    onClick={this.onClickedHandlerRight}
                    style={{backgroundImage: `linear-gradient( to bottom, rgba(255,255,255, .8) 0%,rgba(255,255,255, .8) 100%), url(${projects})`}}
                    onMouseEnter={this.onChangeClassHandlerRight}
                    className={cssClassRight.join(" ")}>{this.props.clicked === "right" ? null : <Text state={this.state.side} clicked={this.props.clicked}/> }{ <Projects active={this.props.clicked === "right"}/>}</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        clicked: state.main.clicked
    }
};
const mapDispatchToProps = dispatch => {
    return{
        focusedTech: () => dispatch(focusedTech()),
        focusedProjects: () => dispatch(focusedProjects())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);