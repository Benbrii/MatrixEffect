import React, { Component } from "react";
import "./App.css";

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
      count: 1
    };
    setInterval(params => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  render() {
    const { count } = this.state;

    return (
      <div className="App" style={style.App}>
        {Array(columns)
          .fill(0)
          .map((x, i) => (
            <Column key={"column" + i} rows={rows} count={count} />
          ))}
      </div>
    );
  }
}

export default App;
