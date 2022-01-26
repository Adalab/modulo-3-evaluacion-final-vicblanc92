const FilterName = (props) => {
  const handleChangeInput = (ev) => {
    props.handleFilterName(ev.currentTarget.value);
  };

  //Esta función será la encargada de ejecutar a handleFilterName
  return (
    <>
      <label className="form__label">Buscar por personaje</label>
      <input
        onChange={handleChangeInput}
        className="form__input"
        type="text"
        value={props.FilterName}
      ></input>
    </>
  );
};

export default FilterName;

//donde se encuentra el input es donde se va a encontrar el currentTarget, ya que es donde existe el evento.
