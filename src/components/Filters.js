import FilterGender from './FilterGender';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import FilterSpecie from './FilterSpecie';
import ResetBtn from './ResetBtn';
import SortCharacters from './SortCharacters';

const Filters = (props) => {
  return (
    <>
      <form className="form__wrapper">
        <div>
          <FilterName
            handleFilterName={props.handleFilterName}
            filterName={props.filterName}
          />
        </div>
        <div>
          <FilterHouse
            handleFilterHouse={props.handleFilterHouse}
            filterHouse={props.filterHouse}
          />
        </div>
        <div>
          <FilterGender
            handleFilterGender={props.handleFilterGender}
            filterGender={props.filterGender}
          />
        </div>
        <div>
          <FilterSpecie
            handleFilterSpecie={props.handleFilterSpecie}
            filterSpecie={props.filterSpecie}
          />
        </div>
      </form>
      <div className="form__wrapper--check">
        <SortCharacters
          handleSortCharacters={props.handleSortCharacters}
          sortCharacters={props.sortCharacters}
        />
      </div>
      <ResetBtn handleReset={props.handleReset} />
    </>
  );
};
export default Filters;
