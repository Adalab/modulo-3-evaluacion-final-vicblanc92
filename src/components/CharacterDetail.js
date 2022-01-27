import { Link } from 'react-router-dom';
// import Gryffindor from '../images/gryffindor.jpg';

const CharacterDetail = (props) => {
  // const houseHogwarts = () => {
  //   if (props.character.house === 'Gryffindor') {
  //     <img src={Gryffindor} alt="gryffindor"></img>;
  //   }
  // };
  if (props.character) {
    return (
      <>
        {/* <img alt="Gryffindor">{houseHogwarts()}</img> */}
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
              Estado: {props.character.alive ? 'Vivo/a' : 'Fallecido/a'}
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
