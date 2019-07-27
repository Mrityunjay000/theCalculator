import React, { Component } from 'react';
import './App.css';
import Question from './Question/Question';


//in order to generate more of the same component (answer for example),
//just have an array of components in state, and when a new component is added,
//use ES6 splice thing to take content of the old array and appends a new component within that array. 

class App extends Component {
  state = {
    sets: [
      <Question />
    ]
  }
  
  render() {
    const addSet = () => {
      this.setState({
        sets: [...this.state.sets, <Question />]
      });
    }
    const button = {
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '15px'
    }
    
    return (
      <div className="App">
        
        <h1>The Calculator</h1>
        <button onClick={addSet} style={button}>Add Question</button>

       
          {this.state.sets}
          

       
      </div>
    );
  }
}

export default App;
