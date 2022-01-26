import CharacterCard from './CharacterCard';

const CharactersList = (props, index) => {
  const characterElements = props.characters.map((character) => {
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
};

export default CharactersList;

//transforma el array de objetos en li
