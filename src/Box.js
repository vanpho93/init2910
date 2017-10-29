import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 10
        }
        this.addOne = this.addOne.bind(this);
    }

    addOne() {
        // this.setState({
        //     value: this.state.value + 1
        // })
        this.setState(prevState => ({ value: prevState.value + 1 }))
    }

    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <button onClick={this.addOne}>Increase</button>
            </div>
        );
    }
}
