const FilterHouse = (props) => {
  const handleChangeSelect = (ev) => {
    ev.preventDefault();
    props.handleFilterHouse(ev.currentTarget.value);
    //key es el filtro que invoca a la función y value es el valor que escribe o elige la usuaria.
  };
  return (
    <>
      <label className="form__label">Selecciona la casa</label>
      <select
        className="form__select"
        value={props.filterHouse}
        onChange={handleChangeSelect}
      >
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
