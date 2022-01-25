import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemsListConteiner from './Components/ItemsListConteiners/ItemsListContainers';
import ItemDetailContainer from './Components/itemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemsListConteiner />
        <ItemDetailContainer />

      </header>
    </div>
  );
}

export default App;
