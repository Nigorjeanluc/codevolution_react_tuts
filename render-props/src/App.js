/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ClickCountTwo from './components/ClickCountTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <ClickCountTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Igor' : 'Guest'} />
      {/* <Counter render={(count, incrementCount) => <ClickCountTwo} /> */}
    </div>
  );
}

export default App;
