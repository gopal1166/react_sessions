/**
 * counter component
 */
import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    btnHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <br /><br />
                <input type='button' value='count' name='counter'
                    onClick={this.btnHandler}
                />
                : {this.state.count}
            </div>
        )
    }
}

export default Counter;