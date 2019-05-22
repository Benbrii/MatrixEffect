import React, { Component } from 'react'


const style = {
    lineHeight: 'normal',
    fontFamily: 'Noto Sans',

}
const opacityRef = 0.3

class Cell extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            caract: String.fromCharCode(Math.round(Math.random() * 1000) + 192),
            opacity: opacityRef,
            color: 'green'
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isActive) {
            this.setState({
                caract: String.fromCharCode(Math.round(Math.random() * 1000) + 192),
                opacity: 1,
                color: 'white',
            })
        } else {
            if (this.state.opacity > opacityRef)
                this.setState({
                    opacity: this.state.opacity < opacityRef+0.1 ? opacityRef : this.state.opacity - 0.1,
                    color: 'green',
                })
            
        }
    }

    render() {
        const { color, opacity } = this.state

        return (
            <span style={{ ...style, color: color, filter: 'opacity(' + opacity + ')' }} >
                {this.state.caract}
            </span>
        )
    }
}

export default Cell;