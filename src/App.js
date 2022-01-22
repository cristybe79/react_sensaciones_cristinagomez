import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemsListConteiner from './Components/ItemsListConteiners/ItemsListContainers';
import ItemList from './Components/ItemsListConteiners/ItemList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <NavBar />
        <ItemsListConteiner />

      </header>
    </div>
  );
}

export default App;
