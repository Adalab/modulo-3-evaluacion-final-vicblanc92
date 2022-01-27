const ResetBtn = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="btn__reset" onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetBtn;
