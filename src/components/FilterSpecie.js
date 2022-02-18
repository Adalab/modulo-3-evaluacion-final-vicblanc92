const FilterSpecie = (props) => {
  const handleChangeText = (ev) => {
    props.handleFilterSpecie(ev.currentTarget.value);
  };
  return (
    <>
      <label className="form__label">Buscar por especie</label>
      <input
        className="form__input"
        value={props.filterSpecie}
        onChange={handleChangeText}
        type="text"
      ></input>
    </>
  );
};

export default FilterSpecie;
