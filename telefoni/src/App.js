import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Telefoni from './components/Telefoni'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Telefoni/>
    </div>
  );
}

export default App;
