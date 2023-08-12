import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Greet from './func_components/Greet'
import Welcome from './class_components/Welcome';
import './App.css';
import Hello from './func_components/Hello';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet name="Igor" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Eduard" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Pacis" heroName="Spiderman" />
        {/* <Welcome />
        <Hello /> */}
      </div>
    )
  }
}

export default App;
