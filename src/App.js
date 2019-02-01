import React, {Component} from 'react';
import classes from './App.module.scss';
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import About from './components/About/About';
import Layout from './containers/Layout/Layout';
import Contact from './components/Contact/Contact';
import SocialMedia from './components/UI/SocialMedia/SocialMedia';
import Header from './containers/Header/Header';
import SingleProject from "./containers/SingleProject/SingleProject";

class App extends Component {
    state = {
        initialAnimate: false,
        iconsActive: false,
        aboutActive: null,
        windowWidth: null
    };
    componentDidMount(){
        this.setState({windowWidth: window.innerWidth});
    }
    onMediaHandler = () => {
        this.setState(prevState => {
            return {iconsActive: !prevState.iconsActive, initialAnimate: true}
        });
    };
    onAboutHandler = () => {
        this.setState(prevState => {
            return{aboutActive: !prevState.aboutActive}
        })
    };
    render() {
        return (
            <BrowserRouter basename={"/portfolio"}>
                <div className={classes.App}>
                    <About active={this.state.aboutActive}/>
                    <Header clicked={this.onAboutHandler}>
                        <Contact clicked={this.onMediaHandler}>
                            <SocialMedia direction={"-"} distance={this.state.windowWidth > 800 ? -200 : -100} active={this.state.iconsActive}><a
                                style={this.state.iconsActive ? null : {pointerEvents: "none"}}
                                href={"https://github.com/IvanNajdovski"}><FaGithub
                                style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                            <SocialMedia direction={"-"} distance={this.state.windowWidth > 800 ? -100 : -60} active={this.state.iconsActive}><a
                                style={this.state.iconsActive ? null : {pointerEvents: "none"}}
                                href={"https://www.facebook.com/ivan.najdovski.7"}><FaFacebook
                                style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                            <SocialMedia direction={"+"} distance={this.state.windowWidth > 800 ? 100 : 60} active={this.state.iconsActive}><a
                                style={this.state.iconsActive ? null : {pointerEvents: "none"}}
                                href={"https://www.instagram.com/ivannajdovski/?hl=en"}><FaInstagram
                                style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                            <SocialMedia direction={"+"} distance={this.state.windowWidth > 800 ? 200 : 100} active={this.state.iconsActive}><a
                                style={this.state.iconsActive ? null : {pointerEvents: "none"}}
                                href={"https://www.linkedin.com/in/ivan-najdovski-4985a3167/"}><FaLinkedin
                                style={{height: "100%", width: "100%", color: "#000"}}/></a></SocialMedia>
                        </Contact>
                    </Header>

                    <Switch>
                        <Route path={"/"} exact component={Layout}/>
                        <Route path={"/project/:project"} component={SingleProject}/>
                        <Redirect to={"/"}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        focus: state.main.clicked
    }
};


export default connect(mapStateToProps)(App);


