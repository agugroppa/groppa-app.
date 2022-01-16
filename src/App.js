import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a BARA SUSHI!"}/>
        
      </header>
    </div>
  );
}

export default App;
