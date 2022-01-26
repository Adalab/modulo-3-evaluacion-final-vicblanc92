const CharacterCard = (props) => {
  const translateSpecies = () => {
    return props.character.species === 'human' ? 'Humano/a' : 'Medio gigante';
  };

  return (
    <>
      <img src={props.character.image} alt={props.character.name} />

      <h4 className="li__wrapper--name">{props.character.name}</h4>
      <p className="li__wrapper--specie">{translateSpecies()}</p>
    </>
  );
};
export default CharacterCard;
