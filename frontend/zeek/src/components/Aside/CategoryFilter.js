import { useSelector, useDispatch } from "react-redux";
import { addCategoryFilter, removeCategoryFilter } from "../../redux/actions/actionCreators";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const changeFilter = (e) => {
    if (e.target.checked) {
      dispatch(addCategoryFilter(e.target.value));
    } else {
      dispatch(removeCategoryFilter(e.target.value));
    }
  };
  return (
    <div>
      <h2>Category</h2>
      <form className="filter">
        {categories.map((category) => {
          return (
            <>
              <input type="checkbox" id={category.id} value={category.id} onChange={changeFilter}/>
              <label htmlFor={category.id}>{category.name}</label>
              <br/>
            </>
          )
        })}
      </form>
    </div>
  )
}

export default CategoryFilter
