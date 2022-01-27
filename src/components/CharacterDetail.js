import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  if (props.character) {
    return (
      <>
        <section className="character__detail--card">
          <img
            className="character__detail--image"
            width="400px"
            height="600px"
            src={props.character.image}
            alt={props.character.name}
          />

          <div className="character__detail--information">
            <h4 className="character__detail--name">{props.character.name}</h4>

            <p className="character__detail--gender">
              Género: {props.character.gender}
            </p>
            <p className="character__detail--status">
              Estado: {props.character.alive ? 'VIVO/A' : 'FALLECIDO/A'}
            </p>
            <p className="character__detail--house">
              Casa: {props.character.house}
            </p>
            <Link className="character__detail--link" to="/">
              Volver
            </Link>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <div className="character__detail--exists">
          <p>El personaje no existe.</p>
        </div>
      </>
    );
  }
};
export default CharacterDetail;
