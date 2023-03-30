import { useDispatch } from "react-redux";
import { setViewport } from "../../redux/actions/actionCreators";

const AddButtons = () => {
  const dispatch = useDispatch();
  return (
    <div className="create-buttons">
      <button type="button" onClick={() => {dispatch(setViewport("add_task", {}))}}>New Task</button>
      <button type="button" onClick={() => {dispatch(setViewport("add_category", {}))}}>New Category</button>
    </div>
  )
}

export default AddButtons
