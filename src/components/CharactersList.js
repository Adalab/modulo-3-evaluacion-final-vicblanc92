import CharacterCard from './CharacterCard';

const CharactersList = (props) => {
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
};

export default CharactersList;

//transforma el array de objetos en li
