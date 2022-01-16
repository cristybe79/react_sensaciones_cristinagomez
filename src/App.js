import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemsListConteiner from './Components/ItemsListConteiners/ItemsListContainers';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <NavBar />
        <ItemsListConteiner/>
      </header>
    </div>
  );
}

export default App;
