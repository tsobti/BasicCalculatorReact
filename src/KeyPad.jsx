import React from 'react';

class KeyPad extends React.Component {

    render() {
        return (
            <div className="button">
                

                <button name="1" onClick={e => this.props.onClick(e.currentTarget.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.currentTarget.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.currentTarget.name)}>3</button> 
                <button name="+" onClick={e => this.props.onClick(e.currentTarget.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.currentTarget.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.currentTarget.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.currentTarget.name)}>6</button> 
                <button name="-" onClick={e => this.props.onClick(e.currentTarget.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.currentTarget.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.currentTarget.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.currentTarget.name)}>9</button> 
                <button name="*" onClick={e => this.props.onClick(e.currentTarget.name)}>x</button><br/>

                
                <button name="0" onClick={e => this.props.onClick(e.currentTarget.name)}>0</button> 
                <button name="=" onClick={e => this.props.onClick(e.currentTarget.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.currentTarget.name)}>÷</button>
                <button name="C" onClick={e => this.props.onClick(e.currentTarget.name)}>C</button><br/>
            </div>
        );
    }
}


export default KeyPad;