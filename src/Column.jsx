import React, { Component } from 'react'
import Cell from './Cell.jsx'

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
}
class componentName extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            ref: Math.round(Math.random() * this.props.rows),
        }
    }

    render() {
        const { rows, count } = this.props;
        const { ref } = this.state;

        return (
            <div className="column" style={style}>
                {
                    Array(rows).fill(0).map((x, i) =>
                        <Cell key={"caract" + i} index={i} isActive={i === (ref + count) % rows} />
                    )
                }
            </div>
        )
    }
}

export default componentName