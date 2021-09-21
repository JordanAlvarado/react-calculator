import React, { Component } from 'react'
 
export class Buttons extends Component {
    render() {
        return (
            <div className="button">
          <button value="+" onClick={e => this.props.onClick(e.target.name)}>+</button> 
          <button value="-" onClick={e => this.props.onClick(e.target.name)}>-</button> 
          <button value="*" onClick={e => this.props.onClick(e.target.name)}>x</button> 
          <button value="/" onClick={e => this.props.onClick(e.target.name)}>÷</button> 
          <button value="1" onClick={e => this.props.onClick(e.target.name)}>1</button> 
          <button value="2" onClick={e => this.props.onClick(e.target.name)}>2</button> 
          <button value="3" onClick={e => this.props.onClick(e.target.name)}>3</button> 
          <button onClick={this.props.switch}>+/-</button>
          <button value="4" onClick={e => this.props.onClick(e.target.name)}>4</button> 
          <button value="5" onClick={e => this.props.onClick(e.target.name)}>5</button> 
          <button value="6" onClick={e => this.props.onClick(e.target.name)}>6</button> 
          <button onClick={e => this.props.onClick(e.target.name)}>AC</button> 
          <button value="7" onClick={e => this.props.onClick(e.target.name)}>7</button> 
          <button value="8" onClick={e => this.props.onClick(e.target.name)}>8</button> 
          <button value="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
          <button onClick={e => this.props.onClick(e.target.name)}>C</button>
          <button className="zero" value="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
          <button className="equals" value="=" onClick={e => this.props.onClick(e.target.name)}>=</button> 
            </div>
        )
    }
}

export default Buttons