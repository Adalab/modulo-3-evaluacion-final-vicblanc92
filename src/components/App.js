import '../styles/App.scss';
// import LocalStorage from '../services/LocalStorage.js';
import { useEffect } from 'react';
import getCharactersFromApi from '../services/charactersApi';
import { useState } from 'react';
import CharactersList from './CharactersList';
import Filters from './Filters';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('Gryffindor');
  const [filterGender, setFilterGender] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('');
  const [sortCharacters, setSortCharacters] = useState(false);

  //cada vez ue filtre por nombre o por casa, quiero guardar los datos en mi variable estado, además tengo que controlar el input y el select. Al renderizar mi página se hará con lo que me interesa.

  useEffect(() => {
    getCharactersFromApi(filterHouse).then((charactersResponse) => {
      setCharacters(charactersResponse);
    });
  }, [filterHouse]);

  let filteredCharacters = [...characters];
  if (filterName !== '') {
    filteredCharacters = filteredCharacters.filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
  if (filterGender !== '') {
    filteredCharacters = filteredCharacters.filter(
      (character) => character.gender === filterGender
    );
  }
  if (filterSpecie !== '') {
    filteredCharacters = filteredCharacters.filter((character) => {
      return character.species
        .toLowerCase()
        .includes(filterSpecie.toLowerCase());
    });
  }
  if (sortCharacters) {
    filteredCharacters.sort((a, b) => a.name.localeCompare(b.name));
  }

  //lo que me devuelve la api lo convierto a mayúsculas, incluimos lo que ha escrito la usuaria y lo convertimos a minúsculas.

  //aquí vamos a ir guardando los usuarios filtrados, para ello usaremos filter con la condición que le pasemos. Si lo pongo en characterlist, le tendría que pasar los valores por props que he escrito en characterList. Lo pongo aquí para no pasar props.

  const handleFilterName = (charactersData) => {
    setFilterName(charactersData);
  };

  const handleFilterHouse = (houseData) => {
    setFilterHouse(houseData);
  };

  const handleFilterGender = (genderData) => {
    setFilterGender(genderData);
  };

  const handleFilterSpecie = (specieData) => {
    setFilterSpecie(specieData);
  };

  const handleSortCharacters = (sortData) => {
    setSortCharacters(sortData);
  };

  const handleReset = () => {
    setFilterName('');
    setFilterHouse('Gryffindor');
    setCharacters([]);
  };

  //recibe dos parámetros que son objetos.

  //lo que me interesa de house es el value y lo que me interesa de characters es el value, entonces no puede dejarlo sin el .value

  //función manejadora que es la encargada de modificar filter name. recibe como parámetro un valor que le va a meter a la variable de estado filterName.
  //no tengo que tner el target aqui porque es en filterName donde existe el evento.
  const routeData = useRouteMatch('/character/:house/:characterId');
  const house = routeData ? routeData.params.house : filterHouse;
  const characterId = routeData ? routeData.params.characterId : null;
  const foundCharacter = characters.find(
    (character) => character.id === characterId
  );

  if (house !== filterHouse) {
    setFilterHouse(house);
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Filters
            handleFilterName={handleFilterName}
            filterName={filterName} //esto es el valor que ha escrito la usuaria para buscar por nombre
            handleFilterHouse={handleFilterHouse}
            filterHouse={filterHouse}
            handleReset={handleReset}
            handleFilterGender={handleFilterGender}
            filterGender={filterGender}
            handleFilterSpecie={handleFilterSpecie}
            filterSpecie={filterSpecie}
            handleSortCharacters={handleSortCharacters}
            sortCharacters={sortCharacters}
          />

          <CharactersList characters={filteredCharacters} />
        </Route>
        <Route path="/character/:house/:characterId">
          <CharacterDetail character={foundCharacter} />;
        </Route>
      </Switch>
    </>
  );
}
export default App;

//Para pasar la función manejadora handleChangeInput a FilterName, a Filters le tengo que poner FilterName ={handleChangeInput}

//si le paso a users={users} le estaré pasando mi listado principal, por eso le paso filteredCharacters, porque quiero que me los filtre por nombre.

//con routh path le digo que tiene que ser igual a barrita porque es la página principal.

//cuando se encuentre una ruta como /character/:characterId, se va a ejecutar la función.

//el switch va a estar compuesto por dos rutas, el home y el characterDetail.
