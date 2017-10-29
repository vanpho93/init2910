import React from "react";

class Word extends React.Component {
    render() {
        const { vn, en, isMemorized } = this.props.spot;
        // const vn = this.props.spot.vn
        const cor = isMemorized ? "green" : "red";
        const vnText = isMemorized ? "----" : vn;
        return (
            <div>
                <h3 style={{ color: cor }}>{en}</h3>
                <p>{vnText}</p>
            </div>
        )
    }
}

export default Word;