import { useDispatch } from "react-redux";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h2>Status</h2>
      <form className="filter">
        <input type="checkbox" value="pending" id="pending" onChange={changeFilter}/>
        <label for="pending">Pending</label>
        <input type="checkbox" value="in-progress" id="in-progress" onChange={changeFilter}/>
        <label for="in-progress">In Progress</label>
        <input type="checkbox" value="complete" id="complete" onChange={changeFilter}/>
        <label for="complete">Complete</label>
      </form>
    </div>
  )
}

export default StatusFilter
