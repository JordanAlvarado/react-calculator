import React, {Component} from "react";
import './App.css';
import Results from "./Components/Results";
import Buttons from "./Components/Buttons";


class App extends Component {
  constructor() {
    super()
    this.state = {
      result: "",
      positive: true,
  }
  }

  onClick = button => {
    this.setState({
        result: this.state.result + button
    })
  }

  render(){
    return (
      <div className ="calculator">
        <section className="results-container"></section>
          <Results result={this.state.result}/>
          <Buttons onClick = {this.onClick}/>
          <section/>
      </div>
    )
  }
}
export default App;