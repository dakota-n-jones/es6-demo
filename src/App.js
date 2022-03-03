import './App.css';
import Demo from './components/Demo';
import mainDemoContainer from './demos/MainDemoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Javascript ES6 Essentials
      </header>
      <Demo demoContents={mainDemoContainer} />
    </div>
  );
}

export default App;
