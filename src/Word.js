import React from "react";

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMemorized: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({isMemorized: !prevState.isMemorized}))
        // this.setState({
        //     isMemorized: !this.state.isMemorized
        // })
    }

    render() {
        const vn = 'thanh pho';
        const en = 'city';
        const { isMemorized } = this.state;
        // const vn = this.props.spot.vn
        const cor = isMemorized ? "green" : "red";
        const vnText = isMemorized ? "----" : vn;
        return (
            <div>
                <h3 style={{ color: cor }}>{en}</h3>
                <p>{vn}</p>
                <button onClick={this.toggle}>Toggle isMemorized</button>
            </div>
        )
    }
}

export default Word;