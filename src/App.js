import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>

          {/* ruta home */}
          <Route exact path="/">
              <div className="App">
              <header>
              <ItemListContainer greeting={"Bienvenido a BARA SUSHI!"}/>
              </header>
              </div>
          </Route>

          {/* {/* ruta categorias */}
          <Route path="/category/:categoryId">
          <ItemListContainer/>
            Estás en categorias
          </Route>

          {/* ruta carrito */}
          <Route path="/product/:productId">
            <ItemDetailContainer/>
          </Route>

        </Switch>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
