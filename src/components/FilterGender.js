const FilterGender = (props) => {
  const handleChangeGender = (ev) => {
    props.handleFilterGender(ev.currentTarget.value);
  };
  return (
    <>
      <label className="form__label">Selecciona el género</label>
      <select
        className="form__select"
        value={props.filterGender}
        onChange={handleChangeGender}
      >
        <option value="">Todos/as</option>
        <option value="female">Mujer</option>

        <option value="male">Hombre</option>
      </select>
    </>
  );
};

export default FilterGender;
