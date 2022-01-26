import '../styles/App.scss';
// import LocalStorage from '../services/LocalStorage.js';
import { useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import { useState } from 'react/cjs/react.development';
import CharactersList from './CharactersList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromApi().then((charactersResponse) => {
      console.log(charactersResponse);
      setCharacters(charactersResponse);
    });
  }, []);

  return (
    <>
      <body>
        <header>
          <div className="header__div">
            <h1 className="header__title">Harry Potter</h1>
          </div>

          <form className="form__wrapper">
            <label className="form__label">Buscar por personaje</label>
            <input className="form__input" type="text"></input>
            <label className="form__label">Selecciona la casa</label>
            <select className="form__select">
              <option>Gryffindor</option>
              <option>Slytherin</option>
              <option>Hufflepuff</option>
              <option>Ravenclaw</option>
            </select>
          </form>
        </header>

        <CharactersList characters={characters} />
      </body>
    </>
  );
}
export default App;
