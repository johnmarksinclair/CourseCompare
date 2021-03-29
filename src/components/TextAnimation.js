import React, {Component} from 'react';
import { Transition } from 'semantic-ui-react';
export default class TextAnimation extends Component{
    constructor() {
        super();
        this.state ={visible: false};
    }
    toggleVisibility = () =>
         this.setState((prevState) => ({ visible: !prevState.visible }));
    render(){
        setTimeout(() => {this.setState({visible: true});},1000);
        return(
            <div onMouseEnter={this.toggleVisibility}>
                <Transition visible={this.state.visible} animation='scale' duration={800}>
                    <div className={this.props.font}>{this.props.text}</div>
                </Transition>
            </div>
    )};
};