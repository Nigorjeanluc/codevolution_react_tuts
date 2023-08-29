/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyles.css'
import styles from './appStyles.module.css' // this is a module stylesheet (CSS module do not apply to child components)

function App() {
  return (
    <div className="App">
      <Inline />
      <Stylesheet primary={true} />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <NameList /> */}
    </div>
  );
}

export default App;
