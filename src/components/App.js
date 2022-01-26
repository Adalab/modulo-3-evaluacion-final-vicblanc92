import '../styles/App.scss';
// import LocalStorage from '../services/LocalStorage.js';
import { useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import { useState } from 'react/cjs/react.development';
import CharactersList from './CharactersList';
import Filters from './Filters';
import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('');

  //cada vez ue filtre por nombre o por casa, quiero guardar los datos en mi variable estado, además tengo que controlar el input y el select. Al renderizar mi página se hará con lo que me interesa.

  useEffect(() => {
    getCharactersFromApi().then((charactersResponse) => {
      console.log(charactersResponse);
      setCharacters(charactersResponse);
    });
  }, []);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });
  //lo que me devuelve la api lo convierto a mayúsculas, incluimos lo que ha escrito la usuaria y lo convertimos a minúsculas.

  //aquí vamos a ir guardando los usuarios filtrados, para ello usaremos filter con la condición que le pasemos. Si lo pongo en characterlist, le tendría que pasar los valores por props que he escrito en characterList. Lo pongo aquí para no pasar props.

  const handleFilterName = (charactersData) => {
    setFilterName(charactersData);
  };

  const handleFilterHouse = (housesData) => {
    setFilterHouse(housesData);
  };

  //función manejadora que es la encargada de modificar filter name. recibe como parámetro un valor que le va a meter a la variable de estado filterName.
  //no tengo que tner el target aqui porque es en filterName donde existe el evento.

  return (
    <>
      <header>
        <div className="header__div">
          <h1 className="header__title">Harry Potter</h1>
        </div>

        <Filters
          handleFilterName={handleFilterName}
          handleFilterHouse={handleFilterHouse}
          filterName={filterName}
        />
      </header>

      <CharactersList characters={filteredCharacters} />
    </>
  );
}
export default App;

//Para pasar la función manejadora handleChangeInput a FilterName, a Filters le tengo que poner FilterName ={handleChangeInput}

//si le paso a users={users} le estaré pasando mi listado principal, por eso le paso filteredCharacters, porque quiero que me los filtre por nombre.
