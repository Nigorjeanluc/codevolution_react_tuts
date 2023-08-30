/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo />
      <Table /> */}
      <ParentComp />
    </div>
  );
}

export default App;
