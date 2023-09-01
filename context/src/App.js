/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Igor">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
