const getCharactersFromApi = (house) => {
  return fetch(`https://hp-api.herokuapp.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((charactersResult) => {
      const characters = charactersResult.map((character) => {
        return {
          id: `${character.name}${character.dateOfBirth}`,
          name: character.name,
          image: character.image
            ? character.image
            : 'https://i.pinimg.com/564x/93/f3/09/93f309718a76990c1d9a1446a1449585.jpg',
          species: character.species,
          house: character.house,
          alive: character.alive,
          dateOfBirth: character.dateOfBirth,
          gender: character.gender,
        };
      });
      return characters;
    });
};

export default getCharactersFromApi;

//siempre que tenemos listado de elementos nos quedamos con el id. Cuando tengamos el uuid usamos ese, porque sabemos que es un valor único.
//por cada personaje genero un objeto nuevo
//Lo que me devuelve la api lo transformo a json, devuelve una promesa y cuando se resuelve, tengo el resultado que es un array de personajes, luego itero ese array de objetos, y genero n nuevo array con nuevos objetos por cada personaje con la única información que necesito de ellos.
