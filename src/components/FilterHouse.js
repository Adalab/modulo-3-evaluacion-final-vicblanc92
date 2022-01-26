const FilterHouse = (props) => {
  const handleChangeSelect = (ev) => {
    props.handleFilterHouse(ev.currentTarget.value);
  };
  return (
    <>
      <label className="form__label">Selecciona la casa</label>
      <select onChange={handleChangeSelect} className="form__select">
        <option>Gryffindor</option>
        <option>Slytherin</option>
        <option>Hufflepuff</option>
        <option>Ravenclaw</option>
      </select>
    </>
  );
};

export default FilterHouse;
