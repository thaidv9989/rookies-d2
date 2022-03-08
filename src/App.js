import WelcomePage from './pages/WelcomePage/WelcomePage';
import CounterPage from './pages/CounterPage/CounterPage';
import InterestsPage from './pages/InterestsPage/InterestsPage';
import PokemonPage from './pages/PokemonPage/PokemonPage';
import PokemonListPage from './pages/PokemonListPage/PokemonList';
import LoginPage from './pages/LoginPage/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import {useState} from 'react'


const OPTIONS = {
  WELCOME: "welcome",
  COUNTERS: "counters",
  INTEREST: "interest",
  POKEMON: "pokemon",
  POKEMONLIST: "pokemonlist",
  LOGIN: "login"
}

const App = () => {
  const [pageSelect, setPageSelect] = useState(OPTIONS.WELCOME);
  const handleOnChange = (event) =>{
    setPageSelect(event.target.value)
  }
  const getPage = () => {
    switch(pageSelect){
      case OPTIONS.WELCOME: return <WelcomePage/>
      case OPTIONS.COUNTERS: return <CounterPage/>
      case OPTIONS.INTEREST: return <InterestsPage/>
      case OPTIONS.POKEMON: return <PokemonPage/>
      case OPTIONS.POKEMONLIST: return <PokemonListPage/>
      case OPTIONS.LOGIN: return <LoginPage/>

    }
  }
  return (
    <div>
      <select onChange={handleOnChange} className="form-control">
        <option value="welcome">Show welcome</option>
        <option value="counter">Show counter</option>
        <option value="interrest">Show interrest</option>
        <option value="pokemon">Show pokemon</option>
        <option value="pokemonlist">Show pokemon list</option>
        <option value="login">Show login</option>
      </select>
      {pageSelect === "welcome" && <WelcomePage />}
      {pageSelect === "counter" && <CounterPage />}
      {pageSelect === "interrest" && <InterestsPage />}
      {pageSelect === "pokemon" && <PokemonPage />}
      {pageSelect === "pokemonlist" && <PokemonListPage />}
      {pageSelect === "login" && <LoginPage />}
    </div>
  );
}

export default App;
