/* eslint no-eval: 0 */

import React, { Component } from 'react';
import './App.css';
import Button from './_components/button/button';
import Display from './_components/display/display';

class App extends Component {
  state = { 
    display: "0", 
    equation: "0", 
    calc: false, 
    signs: ["+", "-", "/", "*"] 
  }

  selectNumber = (value) => {
    this.setState(prevState => {
      if(prevState.display.length > 7 || prevState.equation.length > 23) return { 
        display: "0",
        equation: "Max digits reached" 
      }
      else if (prevState.calc && prevState.signs.some(sign => prevState.equation[prevState.equation.length - 1] === sign)) return {
        display: value,
        equation: prevState.equation + value,
        calc: false
      }
      else if (prevState.calc) return {
        display: value,
        equation: value,
        calc: false
      }
      else return {
        display: prevState.display === "0" ?  value : prevState.display + value,
        equation: prevState.equation === "0" || prevState.equation === "Max digits reached" ? value : prevState.equation + value
      }
    });
  }
  deleteOneChar = () => {
    this.setState(prevState => ({
        display: prevState.display === "0" || prevState.display.length === 1 ? "0" : prevState.display.slice(0, prevState.display.length - 1),
        equation: prevState.display === "0" ? prevState.equation : prevState.equation === "0" || prevState.equation.length === 1 || prevState.equation === "Max digits reached" ? "0" : prevState.equation.slice(0, prevState.equation.length - 1)
    }));
  }
  clearAll = () => {
    this.setState({
      display: "0",
      equation: "0",
      calc: false
    });
  }
  addSign = (value) => {
    this.setState(prevState => ({
      display: "0",
      equation: prevState.signs.some(sign => prevState.equation[prevState.equation.length - 1] === sign) ? prevState.equation.slice(0, prevState.equation.length - 1) + value: prevState.equation + value
    }));
  }
  addDecimal = (value) => {
    this.setState(prevState => ({
      display: prevState.display.indexOf(".") === -1 ? prevState.display + value : prevState.display,
      equation: prevState.display.indexOf(".") === -1 ? prevState.equation + value : prevState.equation,
      calc: false
    }));
  }
  calculate = () => {
    this.setState(prevState => ({
      display: prevState.signs.some(sign => prevState.equation[prevState.equation.length - 1] === sign) ? prevState.display : prevState.equation === "Max digits reached" ? "0": this.round(eval(prevState.equation)).toString(),
      equation: prevState.signs.some(sign => prevState.equation[prevState.equation.length - 1] === sign) ? prevState.equation : prevState.equation === "Max digits reached" ? "0": this.round(eval(prevState.equation)).toString(),
      calc: true
    }))
  }
  round = (val) => {
    val = val.toString().split('');
    if (val.indexOf('.') !== -1) {
      var valTest = val.slice(val.indexOf('.') + 1, val.length);
      val = val.slice(0, val.indexOf('.') + 1);
      var i = 0;
      while (valTest[i] < 1) {
        i++
      }
      valTest = valTest.join('').slice(0, i + 4);
      if (valTest[valTest.length-1] === '0') {
        valTest = valTest.slice(0, -1);
      }
      return val.join('') + valTest;
    } else {
      return val.join('');
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-name">
          <h5><b>JAVASCRIPT CALCULATOR</b></h5>
        </div>
        <Display equation={this.state.equation} display={this.state.display} />
        <div className="Buttons">
          <Button label="AC" value="ac" buttonId="clear" onClick={this.clearAll}/>
          <Button label="CE" value="ce" onClick={this.deleteOneChar}/>
          <Button label="&divide;" value="/" buttonId="divide" onClick={this.addSign}/>
          <Button label="x" value="*" buttonId="multiply" onClick={this.addSign}/>
          <Button label="7" value="7" buttonId="seven" onClick={this.selectNumber}/>
          <Button label="8" value="8" buttonId="eight" onClick={this.selectNumber}/>
          <Button label="9" value="9" buttonId="nine" onClick={this.selectNumber}/>
          <Button label="-" value="-" buttonId="subtract" onClick={this.addSign}/>
          <Button label="4" value="4" buttonId="four" onClick={this.selectNumber}/>
          <Button label="5" value="5" buttonId="five" onClick={this.selectNumber}/>
          <Button label="6" value="6" buttonId="six" onClick={this.selectNumber}/>
          <Button label="+" value="+" buttonId="add" onClick={this.addSign}/>
          <Button label="1" value="1" buttonId="one" onClick={this.selectNumber}/>
          <Button label="2" value="2" buttonId="two" onClick={this.selectNumber}/>
          <Button label="3" value="3" buttonId="three" onClick={this.selectNumber}/>
          <Button label="=" value="=" buttonId="equals" onClick={this.calculate}/>
          <Button label="0" value="0" buttonId="zero" onClick={this.selectNumber}/>
          <Button label="." value="." buttonId="decimal" onClick={this.addDecimal}/>
        </div>
      </div>
    );
  }
}

export default App;
