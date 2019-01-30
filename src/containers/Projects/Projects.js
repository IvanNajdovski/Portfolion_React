import React, {Component} from 'react';
import classes from './Projects.module.scss';
import {IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io";
import pic1 from '../../assets/project__1/desktop.jpg';
import pic2 from '../../assets/project__2/desktop.jpg';
import pic3 from '../../assets/project__3/desktop.jpg';
import pic4 from '../../assets/project__4/desktop.jpg';
import pic5 from '../../assets/project__5/desktop.jpg';
import pic6 from '../../assets/project__6/desktop.jpg';


import Project from './Project/Project';

class Projects extends Component {
    constructor(props){
        super(props)
        this.myInput = React.createRef()
    }

    state = {
        width: 0,
        scroll: 0,
        active: false
    };

    componentDidMount() {
        console.log(this.myInput.current.offsetWidth)
        setTimeout(() => {
            this.setState({active: true})
        }, 500)

    }
    componentDidUpdate(nextProps, nextState){
        if(this.myInput.current.offsetWidth !== nextState.width )
        this.setState({width: this.myInput.current.offsetWidth});

    }

    onLeftSlide = (e) => {
        e.stopPropagation()
        if(this.state.scroll < 0){
            this.setState(prevState =>{
                return {scroll: prevState.scroll + 800}
            })
        }

    };
    onRightSlide = (e) => {
        e.stopPropagation()
        console.log(this.state.width, "Width")
        console.log(this.state.scroll, "scroll")
        if( this.state.scroll > -this.state.width + 1600){
            this.setState(prevState => {
                return {scroll: prevState.scroll - 800}
            })
        }


    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.onLeftSlide} className={classes.ButtonLeft}><IoIosArrowDropleft
                    className={classes.ButtonLeftIcon}/></button>
                <button onClick={this.onRightSlide} className={classes.ButtonRight}><IoIosArrowDropright
                    className={classes.ButtonRightIcon}/></button>

                <div className={classes.Projects} >
                    <div ref={this.myInput} style={{width:"100%", flexWrap: "wrap", transform: `translateX(${this.state.scroll}px)`, transition: "all .8s cubic-bezier(.56,-0.65,.55,1.53)",display: "flex"}}>
                        <Project pic={pic1} styles={{transitionDelay: ".2s"}} active={this.props.active}/>
                        <Project pic={pic2} picture={pic1} styles={{transitionDelay: ".5s"}} active={this.props.active}/>
                        <Project pic={pic3} picture={pic1} styles={{transitionDelay: ".8s", flex: '2 1 600px'}} active={this.props.active}/>
                        <Project pic={pic4} picture={pic1} styles={{transitionDelay: ".4s",}} active={this.props.active}/>
                        <Project pic={pic5} picture={pic1} styles={{transitionDelay: ".2s"}} active={this.props.active}/>
                        <Project pic={pic6} picture={pic1} styles={{transitionDelay: ".5s"}} active={this.props.active}/>
                        <Project pic={pic1} picture={pic1} styles={{transitionDelay: ".8s"}} active={this.props.active}/>
                        <Project picture={pic1} styles={{transitionDelay: ".4s"}} active={this.props.active}/>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Projects;