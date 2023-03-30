import { useSelector } from "react-redux";
import TaskList from "./TaskList";

const Main = () => {
  const filters = useSelector(state => state.filters);
  const categories = useSelector(state => state.categories); 
  const filteredCategories = categories.filter((category) => {
    if (filters.category.length === 0) {
      return true;
    } else if (filters.category.includes(category.id)) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <main>
      <div className="top-bar">
        <form>
          <input type="text" name="search" />
        </form>
        <div className="view-as">
          <strong>View as: </strong>
          <button type="button">Vertical</button>
          <button>Horizontal</button>
        </div>
      </div>
      <div className="main-list">
        {
          filteredCategories.length !== 0 ?
          filteredCategories.map((cat) => {
            return (
              <TaskList category={cat} key={cat.id} />
            )
          })
          :
          (
            <div>No tasks found</div>
          )
        }
      </div>
    </main>
  )
}

export default Main
