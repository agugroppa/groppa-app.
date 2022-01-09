import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
