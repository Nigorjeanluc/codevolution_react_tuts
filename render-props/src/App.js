/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter from './components/Counter';
import CounterChildrenWrapper from './components/CounterChildrenWrapper';

function App() {
  return (
    <div className="App">
      {/* <ClickCountTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Igor' : 'Guest'} /> */}
      <Counter
        render={
          (count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            />
          )
        }
      />
      <Counter
        render={
          (count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            />
          )
        }
      />
      <CounterChildrenWrapper>
        {(count, incrementCount) => (
            <ClickCounterTwo
              count={count}
              incrementCount={incrementCount}
            />
          )}
      </CounterChildrenWrapper>
      <CounterChildrenWrapper>
        {
          (count, incrementCount) => (
            <HoverCounterTwo
              count={count}
              incrementCount={incrementCount}
            />
          )
        }
      </CounterChildrenWrapper>
    </div>
  );
}

export default App;
