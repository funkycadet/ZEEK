import { useSelector, useDispatch } from "react-redux";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  return (
    <div>
      <h2>Category</h2>
      <form className="filter">
        {categories.map((category) => {
          return (
            <>
              <input type="checkbox" id={category.id} value={category.name} />
              <label for={category.id}>{category.name}</label>
            </>
          )
        })}
      </form>
    </div>
  )
}

export default CategoryFilter
