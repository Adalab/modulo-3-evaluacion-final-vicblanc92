import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
  if (props.characters.length > 0) {
    const characterElements = props.characters.map((character, index) => {
      return (
        <li className="li__wrapper" key={index}>
          <CharacterCard character={character} />
        </li>
      );
    });
    return (
      <>
        <main>
          <section>
            <ul className="ul__wrapper">{characterElements}</ul>
          </section>
        </main>
      </>
    );
  } else {
    return <p>No hay resultados</p>;
  }
};

export default CharactersList;

//transforma el array de objetos en li
