import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { Button as ButtonView } from 'uiw'
import './button.css'
class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: 'Click me' };
    }
    getInitialState(){
        return {
            text:'Click me'
        }
    }
    clickHandler(){
        this.setState({
            text: this.state.text == 'Good job' ?'Click me':'Good job'
        })
    }
    render(){
        return (
            <div>
                <ButtonView block='true' type="primary" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' type="success" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' active='true' type="info" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' type="warn" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' type="error" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' type="danger" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' size='large' type="primary" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' size='small' type="success" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ButtonView block='true' loading type="info" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView>
                <ol>
                    <li><ButtonView size='large' type="primary" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                    <li><ButtonView type="success" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                    <li><ButtonView type="warn" size='large' onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                    <li><ButtonView type="warn" active='true' onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                    <li><ButtonView type="warn" disabled='true' onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                    <li><ButtonView type="warn" onClick={this.clickHandler.bind(this)}>{this.state.text}!</ButtonView></li>
                </ol>
            </div>
        )
    }
}

export default Button;