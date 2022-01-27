import FilterGender from './FilterGender';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import ResetBtn from './ResetBtn';

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

        <FilterGender
          handleFilterGender={props.handleFilterGender}
          filterGender={props.filterGender}
        />

        <ResetBtn handleReset={props.handleReset} />
      </form>
    </>
  );
};
export default Filters;
