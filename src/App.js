import React, { Component } from 'react';
import Word from "./Word";
class App extends Component {
  render() {
    const spot = { en: 'remote', vn: 'tu xa', isMemorized: true }
    return (
      <div className="App">
        <Word spot={spot} />
      </div>
    );
  }
}

// const Word = (props) => (
//   <div>
//     <h3>{ props.spot.en }</h3>
//     <p>{ props.spot.vn }</p>
//   </div>
// );



export default App;
