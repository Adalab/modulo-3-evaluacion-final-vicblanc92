import FilterHouse from './FilterHouse';
import FilterName from './FilterName';

const Filters = (props) => {
  return (
    <>
      <form className="form__wrapper">
        <FilterName
          handleFilterName={props.handleFilterName}
          filterName={props.FilterName}
        />
        <FilterHouse />
      </form>
    </>
  );
};
export default Filters;
