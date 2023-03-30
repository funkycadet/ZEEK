import { useDispatch } from "react-redux";
import { addPriorityFilter, removePriorityFilter } from "../../redux/actions/actionCreators";

const PriorityFilter = () => {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    if (e.target.checked) {
      dispatch(addPriorityFilter(e.target.value));
    } else {
      dispatch(removePriorityFilter(e.target.value));
    }
  };
  return (
    <div>
      <h2>Priority</h2>
      <form className="filter">
        <input type="checkbox" value="Low" id="low" onChange={changeFilter}/>
        <label htmlFor="low">Low</label>
              <br/>
        <input type="checkbox" value="Normal" id="normal" onChange={changeFilter}/>
        <label htmlFor="normal">Normal</label>
              <br/>
        <input type="checkbox" value="Urgent" id="urgent" onChange={changeFilter}/>
        <label htmlFor="urgent">Urgent</label>
              <br/>
      </form>
    </div>
  )
}

export default PriorityFilter
