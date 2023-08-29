/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
      <Stylesheet primary={true} />
      {/* <NameList /> */}
    </div>
  );
}

export default App;
