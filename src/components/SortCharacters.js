const SortCharacters = (props) => {
  const handleClick = (ev) => {
    props.handleSortCharacters(ev.currentTarget.checked);
  };

  return (
    <>
      <label className="form__label">Ordenar alfabéticamente </label>
      <input
        type="checkbox"
        onClick={handleClick}
        value={props.sortCharacters}
        className="form__input--sort"
      ></input>
    </>
  );
};

export default SortCharacters;
