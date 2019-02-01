import React, {Component} from 'react';
import classes from './Projects.module.scss';
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";
import Project from './Project/Project';

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
        name: "Movie Box"
    },
    portfolioTwo: {
        pic: pic8,
        name: "React Portfolio"
    },
    weather: {
        pic: pic1,
        name: "Weather Application"
    },
    burke: {
        pic: pic2,
        name: "Burke"
    },
    amsterdam: {
        pic: pic3,
        name: "Amsterdam"
    },
    portfolioOne: {
        pic: pic6,
        name: "Portfolio"
    },
    localised: {
        pic: pic4,
        name: 'Localised'
    },
    paris: {
        pic: pic5,
        name: "Paris Watch"
    }
};


class Projects extends Component {
    constructor(props) {
        super(props)
        this.myInput = React.createRef()
    }

    state = {
        width: 0,
        scroll: 0,
        active: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({active: true})
        }, 500)

    }

    componentDidUpdate(nextProps, nextState) {
        if (this.myInput.current.offsetWidth !== nextState.width)
            this.setState({width: this.myInput.current.offsetWidth});

    }

    onLeftSlide = (e) => {
        e.stopPropagation()
        if (this.state.scroll < 0) {
            this.setState(prevState => {
                return {scroll: prevState.scroll + 800}
            })
        }

    };
    onRightSlide = (e) => {
        e.stopPropagation()
        if (this.state.scroll > - this.state.width + 800) {
            this.setState(prevState => {
                return {scroll: prevState.scroll - 800}
            })
        }


    };

    render() {
        let projectsArray = [];
        let pro = Object.keys(PROJECTS);
        projectsArray = pro.map(val => {
            return {...PROJECTS[val], baseName: val}
        }).map((val, index) => {
            return (
                <Project key={index} baseName={val.baseName} name={val.name} pic={val.pic}
                         styles={{transitionDelay: index * 0.12}} active={this.props.active}/>
            )
        });


        return (
            <React.Fragment>
                {this.props.active ? (
                    <React.Fragment>
                        <button onClick={this.onLeftSlide} className={classes.ButtonLeft}><IoIosArrowDropleft
                            className={classes.ButtonLeftIcon}/></button>
                        <button onClick={this.onRightSlide} className={classes.ButtonRight}><IoIosArrowDropright
                            className={classes.ButtonRightIcon}/></button>
                    </React.Fragment>
                ) : null}

                <div className={classes.Projects}>
                    <div ref={this.myInput} style={{
                        width: "100%",
                        flexWrap: "wrap",
                        transform: `translateX(${this.state.scroll}px)`,
                        transition: "all .8s cubic-bezier(.56,-0.65,.55,1.53)",
                        display: "flex"
                    }}>
                        {projectsArray}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;