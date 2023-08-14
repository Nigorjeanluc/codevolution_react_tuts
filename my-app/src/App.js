/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import Greet from './func_components/Greet'
import Welcome from './class_components/Welcome';
import './App.css';
import Hello from './func_components/Hello';
import Message from './class_components/Message';
import Counter from './class_components/Counter';
import FunctionClick from './func_components/FunctionClick';
import ClassClick from './class_components/ClassClick';
import EventBind from './class_components/EventBind';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <EventBind />
        {/* <ClassClick />
        <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Igor" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Eduard" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Pacis" heroName="Spiderman" /> */}
        {/* <Welcome name="Igor" heroName="Batman" />
        <Welcome name="Eduard" heroName="Superman" />
        <Welcome name="Pacis" heroName="Spiderman" /> */}
        {/* <Hello /> */}
      </div>
    )
  }
}

export default App;
