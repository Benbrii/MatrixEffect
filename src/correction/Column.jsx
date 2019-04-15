import React, { Component } from "react";
import Cell from "./Cell.jsx";

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};
class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: Math.floor(Math.random() * props.rows)
    };
  }

  render() {
    const { rows , counter} = this.props;
    const { activeIndex } = this.state;
    const cellArray = Array(rows).fill(0);
    return (
      <div className="column" style={style}>
        {cellArray.map((item,index) => (
          <Cell isActive={(activeIndex+counter)%rows === index}  />
        ))}
      </div>
    );
  }
}

export default componentName;
