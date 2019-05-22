import React, { Component } from "react";

const opacityRef = 0.3;

class Cell extends Component {
  constructor(props, context) {
    super(props, context);
    this.char= String.fromCharCode(Math.floor(Math.random() * 1000 + 192))
    this.style = {
        lineHeight: "normal",
        fontFamily: "Noto Sans",
        color: "pink"
      };
      this.opacity = 0;
  }

  render() {
    const { isActive } = this.props;
    if(isActive){
        this.style.color='pink';
        this.opacity=1;
        this.char= String.fromCharCode(Math.floor(Math.random() * 1000 + 192))
    }else{
        this.style.color='red';
        if(this.opacity>0)
            this.opacity-=0.1;
    }

    return <span style={{ ...this.style, filter: 'opacity(' + this.opacity + ')' }}>{this.char}</span>;
  }
}

export default Cell;
