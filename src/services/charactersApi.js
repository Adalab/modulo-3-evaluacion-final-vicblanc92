const getCharactersFromApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((charactersResult) => {
      const characters = charactersResult.map((character) => {
        return {
          id: `${character.name}${character.dateOfBirth}`,
          name: character.name,
          image:
            character.image ??
            `https://via.placeholder.com/210x295/ffffff/666666/?text=${character.name}`,
          species: character.species,
          house: character.house,
        };
      });
      return characters;
    });
};

export default getCharactersFromApi;

//siempre que tenemos listado de elementos nos quedamos con el id. Cuando tengamos el uuid usamos ese, porque sabemos que es un valor único.
//por cada personaje genero un objeto nuevo
//Lo que me devuelve la api lo transformo a json, devuelve una promesa y cuando se resuelve, tengo el resultado que es un array de personajes, luego itero ese array de objetos, y genero n nuevo array con nuevos objetos por cada personaje con la única información que necesito de ellos.
