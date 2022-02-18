import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const CharacterCard = (props) => {
  const translateSpecies = () => {
    if (
      props.character.species === 'human' &&
      props.character.gender === 'male'
    ) {
      return 'Humano';
    } else if (
      props.character.species === 'human' &&
      props.character.gender === 'female'
    ) {
      return 'Humana';
    } else if (props.character.species === 'werewolf') {
      return 'Hombre lobo';
    } else if (props.character.species === 'half-giant') {
      return 'Medio gigante';
    }
  };

  return (
    <>
      <Link
        className="li__wrapper--link"
        to={`/character/${props.character.house}/${props.character.id}`}
      >
        <div className="li__wrapper--allInfo">
          <img
            className="li__wrapper--image"
            width="150px"
            height="210px"
            src={props.character.image}
            alt={props.character.name}
          />
          <div className="li__wrapper--div">
            <h4>{props.character.name}</h4>
            <p>{translateSpecies()}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CharacterCard;
