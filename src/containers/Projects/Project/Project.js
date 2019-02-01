import React, {Component} from 'react';
import classes from './Project.module.scss';
import { Link } from 'react-router-dom';

import Transition from 'react-transition-group/Transition';

class Project extends Component {
    state = {
        hovered: false
    };

    onHoverEnterHandler = () => {
        this.setState({hovered: true})
    };
    onHoverExitHandler = () => {
        this.setState({hovered: false})
    };

    render() {
        return (
            <Transition
                unmountOnExit
                mountOnEnter
                in={this.props.active}
                timeout={2000}>
                {state => {
                    const cssClass = [classes.Project];
                    if (state === "entered") {
                        cssClass.push(classes.Project__Active)
                    } else if (state === "exiting") {
                        cssClass.push(classes.Project__Exit)
                    }
                    return (
                        <Link to={`/project/${this.props.baseName}`}
                            onMouseEnter={this.onHoverEnterHandler}
                            onMouseLeave={this.onHoverExitHandler}
                            style={{
                            ...this.props.styles,
                            backgroundImage: `url(${this.props.pic})`
                        }} className={cssClass.join(" ")}>
                            <h2 className={classes.Project__Text}>{this.props.name}</h2>
                        </Link>
                    )
                }}

            </Transition>
        )
    }
}

export default Project;