const ResetBtn = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="btn__reset" onClick={handleReset}>
      Borrar la búsqueda
    </button>
  );
};

export default ResetBtn;
