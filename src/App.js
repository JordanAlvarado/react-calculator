import React from "react";
import './App.css';
import Delete from "./Components/Delete";
import Equals from "./Components/Equals";
import Input from "./Components/Input";
import Operation from "./Components/Operation";
import Number from "./Components/Number";
import Results from "./Components/Results";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numValue: "",
      operation: "",
      input: 0,
      result: "",
      positive: true,
  }
  }

  render(){
    return (
      <div className ="calculator">
        <section className="results-container">
          <Input/>
          <Results/>
        </section>
        <section className="numbers-container">
          <Number value={1}/>
          <Number value={2}/>
          <Number value={3}/>
          <Number value={4}/>
          <Number value={5}/>
          <Number value={6}/>
          <Number value={7}/>
          <Number value={8}/>
          <Number value={9}/>
          <Number value={0}/>
          <Number value="."/>
        </section>
        <section className="operations-container">
          <Operation op="+" />
          <Operation op="-" />
          <Operation op="x" />
          <Operation op="/" />
          <Operation op="+/-" />
        </section>
        <section className="equals-container">
          <Delete />
          <Equals />
        </section>
      </div>
    )
  }
}
export default App;