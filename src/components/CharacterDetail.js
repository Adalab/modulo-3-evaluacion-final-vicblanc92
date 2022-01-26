import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  if (props.character) {
    return (
      <>
        <section className="character__detail--card">
          <Link to="/">Volver</Link>

          <img
            width="400px"
            height="600px"
            src={props.character.image}
            alt={props.character.name}
          />
          <h4 className="li__wrapper--name">{props.character.name}</h4>

          <p className="li__wrapper--gender">{props.character.gender}</p>
          <p className="li__wrapper--status">
            {props.character.alive ? 'vivo/a' : 'fallecido/a'}
          </p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <p>El personaje no existe.</p>
      </>
    );
  }
};
export default CharacterDetail;
