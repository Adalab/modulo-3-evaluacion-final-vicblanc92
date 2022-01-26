import '../styles/App.scss';
// import LocalStorage from '../services/LocalStorage.js';
import { useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import { useState } from 'react/cjs/react.development';
import CharactersList from './CharactersList';
import Filters from './Filters';
// import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
// import CharacterDetail from './CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  //cada vez ue filtre por nombre o por casa, quiero guardar los datos en mi variable estado, además tengo que controlar el input y el select. Al renderizar mi página se hará con lo que me interesa.

  useEffect(() => {
    getCharactersFromApi(filterHouse).then((charactersResponse) => {
      setCharacters(charactersResponse);
    });
  }, [filterHouse]);

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });
  // .filter((character) => {
  //   return character.house === ''
  //     ? 'gryffindor'
  //     : character.house === filterHouse;
  // });

  //lo que me devuelve la api lo convierto a mayúsculas, incluimos lo que ha escrito la usuaria y lo convertimos a minúsculas.

  //aquí vamos a ir guardando los usuarios filtrados, para ello usaremos filter con la condición que le pasemos. Si lo pongo en characterlist, le tendría que pasar los valores por props que he escrito en characterList. Lo pongo aquí para no pasar props.

  // const handleFilter = (charactersData, houseData) => {
  //   if (charactersData === 'name') {
  //     setFilterName(charactersData.value);
  //   } else if (houseData.key === 'house') {
  //     setFilterHouse(houseData.value);
  //   }
  // };

  const handleFilterName = (charactersData) => {
    setFilterName(charactersData);
  };

  const handleFilterHouse = (houseData) => {
    setFilterHouse(houseData);
  };

  //recibe dos parámetros que son objetos.

  //lo que me interesa de house es el value y lo que me interesa de characters es el value, entonces no puede dejarlo sin el .value

  //función manejadora que es la encargada de modificar filter name. recibe como parámetro un valor que le va a meter a la variable de estado filterName.
  //no tengo que tner el target aqui porque es en filterName donde existe el evento.
  // const renderCharacterDetail = (props) => {
  //   const routeId = props.match.params.characterId;

  //   const foundCharacter = characters.find(
  //     (character) => `${character.name}${character.dateOfBirth}` === routeId
  //   );
  //   return <CharacterDetail character={foundCharacter} />;
  // };

  return (
    <>
      <header>
        <div className="header__div">
          <h1 className="header__title">Harry Potter</h1>
        </div>
        {/* <Switch> */}
        {/* <Route path="/"> */}
        <Filters
          handleFilterName={handleFilterName}
          filterName={filterName} //esto es el valor que ha escrito la usuaria para buscar por nombre
          handleFilterHouse={handleFilterHouse}
          filterHouse={filterHouse}
        />
        {/* </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          /> */}
        {/* </Switch> */}
      </header>

      <CharactersList characters={filteredCharacters} />
    </>
  );
}
export default App;

//Para pasar la función manejadora handleChangeInput a FilterName, a Filters le tengo que poner FilterName ={handleChangeInput}

//si le paso a users={users} le estaré pasando mi listado principal, por eso le paso filteredCharacters, porque quiero que me los filtre por nombre.

//con routh path le digo que tiene que ser igual a barrita porque es la página principal.

//cuando se encuentre una ruta como /character/:characterId, se va a ejecutar la función.
