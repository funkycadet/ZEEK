import { useSelector, useDispatch } from "react-redux";
import { addStatusFilter, removeStatusFilter } from "../../redux/actions/actionCreators";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const changeFilter = (e) => {
    if (e.target.checked) {
      dispatch(addStatusFilter(e.target.value));
    } else {
      dispatch(removeStatusFilter(e.target.value));
    }
  };
  return (
    <div>
      <h2>Status</h2>
      <form className="filter">
        <input type="checkbox" value="Pending" id="pending" onChange={changeFilter}
          checked={filters.status.includes("Pending") ? true : false}
        />
        <label htmlFor="pending">Pending</label>
              <br/>
        <input type="checkbox" value="In Progress" id="in-progress" onChange={changeFilter}
          checked={filters.status.includes("In Progress") ? true : false}
        />
        <label htmlFor="in-progress">In Progress</label>
              <br/>
        <input type="checkbox" value="Complete" id="complete" onChange={changeFilter}
          checked={filters.status.includes("Complete") ? true : false}
        />
        <label htmlFor="complete">Complete</label>
              <br/>
        <input type="checkbox" value="Archived" id="archived" onChange={changeFilter}
          checked={filters.status.includes("Archived") ? true : false}
        />
        <label htmlFor="archived">Archived</label>
              <br/>
      </form>
    </div>
  )
}

export default StatusFilter
