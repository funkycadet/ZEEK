import { useSelector, useDispatch } from "react-redux"
import { setViewport } from "../../redux/actions/actionCreators";
import CategoryForm from "./CategoryForm";
import TaskForm from "./TaskForm";
import UserView from "./UserView";

const Popup = () => {
  const viewport = useSelector(state => state.viewport);
  const dispatch = useDispatch();
  const removePopup = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(setViewport("main", {}));
    }
  }
  switch (viewport.current) {
    case "add_task":
      return (
        <div className="popup-bg" onClick={removePopup}>
          <TaskForm edit={false} target={{}} />
        </div>
      )

    case "add_category":
      return (
        <div className="popup-bg" onClick={removePopup}>
          <CategoryForm edit={false} target={{}} />
        </div>
      )

    case "edit_task":
      return (
        <div className="popup-bg" onClick={removePopup}>
          <TaskForm edit={true} target={viewport.target} />
        </div>
      )

    case "edit_category":
      return (
        <div className="popup-bg" onClick={removePopup}>
          <CategoryForm edit={true} target={viewport.target} />
        </div>
      )

    case "view_user":
      return (
        <div className="popup-bg" onClick={removePopup}>
          <UserView />
        </div>
      )

    default:
      return;
  }
}

export default Popup
