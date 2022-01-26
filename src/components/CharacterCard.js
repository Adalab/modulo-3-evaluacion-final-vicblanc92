// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CharacterCard = (props) => {
  const translateSpecies = () => {
    return props.character.species === 'human' ? 'HUMANO/A' : 'MEDIO GIGANTE';
  };

  return (
    <>
      {/* <Link to={`/character/${props.character.name}`}> */}
      <img
        width="400px"
        height="600px"
        src={props.character.image}
        alt={props.character.name}
      />
      {/* </Link> */}

      <h4 className="li__wrapper--name">{props.character.name}</h4>
      <p className="li__wrapper--specie">{translateSpecies()}</p>
    </>
  );
};
export default CharacterCard;
