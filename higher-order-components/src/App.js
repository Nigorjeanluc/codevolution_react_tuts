/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="Igor" />
      <HoverCounter name="Igor" />
    </div>
  );
}

export default App;
