import { useDispatch } from "react-redux";

const PriorityFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Priority</h2>
      <form className="filter">
        <input type="checkbox" value="low" id="low"/>
        <label for="low">Low</label>
        <input type="checkbox" value="normal " id="normal"/>
        <label for="normal">Normal</label>
        <input type="checkbox" value="urgent" id="urgent"/>
        <label for="urgent">Urgent</label>
      </form>
    </div>
  )
}

export default PriorityFilter
