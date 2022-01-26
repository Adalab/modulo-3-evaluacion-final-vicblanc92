import FilterHouse from './FilterHouse';
import FilterName from './FilterName';

const Filters = (props) => {
  return (
    <>
      <form className="form__wrapper">
        <FilterName
          handleFilterName={props.handleFilterName}
          filterName={props.filterName}
        />
        <FilterHouse
          handleFilterHouse={props.handleFilterHouse}
          filterHouse={props.filterHouse}
        />
      </form>
    </>
  );
};
export default Filters;
