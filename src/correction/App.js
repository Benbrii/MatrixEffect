import React, { Component } from "react";
import "../App.css";

import Column from "./Column.jsx";

const style = {
  App: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "black",
    overflow: "hidden"
  }
};

const columns = 100;
const rows = 40;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 500)
  }

  render() {
    const { counter } = this.state;
    const colArray = Array(columns).fill(0);
    return (
      <div className="App" style={style.App}>
        {colArray.map(() => (
          <Column rows={rows} counter={counter} />
        ))}
      </div>
    );
  }
}

export default App;
