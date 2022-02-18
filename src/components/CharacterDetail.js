import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import Gryffindor from '../images/gryffindor.jpg'

const CharacterDetail = (props) => {
  if (props.character) {
    return (
      <>
        {/* <img alt="Gryffindor">{houseHogwarts()}</img> */}
        <Header />
        <Link to="/">
          <button className="character__detail--link"> &lt; Volver </button>
        </Link>
        <section className="character__detail--card">
          <img
            className="character__detail--image"
            src={props.character.image}
            alt={props.character.name}
          />

          <div className="character__detail--information">
            <h4 className="character__detail--name">{props.character.name}</h4>

            <p className="character__detail--gender">
              Género: {props.character.gender === 'female' ? 'Mujer' : 'Hombre'}
            </p>
            <p className="character__detail--status">
              Estado:{' '}
              {props.character.alive === true && 'male' ? 'Vivo' : 'Fallecido'}
            </p>
            <p className="character__detail--house">
              Casa: {props.character.house}
            </p>
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
