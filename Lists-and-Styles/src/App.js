/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline />
      <Stylesheet primary={true} />
      {/* <NameList /> */}
    </div>
  );
}

export default App;
