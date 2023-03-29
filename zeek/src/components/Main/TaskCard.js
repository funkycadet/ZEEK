import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, setViewport, updateTask } from "../../redux/actions/actionCreators";

const TaskCard = ({ id, title, desc, priority, status, category })=> {
  const dispatch = useDispatch();
  const [deleting, setDeleting] = useState(false);
  const changeStatus = () => {
    const updatedTask = {
      id, title, desc, priority, status, category 
    };
    if (status === "Pending") {
      updatedTask.status = "In Progress";
    } else if (status === "In Progress") {
      updatedTask.status = "Complete";
    } else if (status === "Complete") {
      updatedTask.status = "Pending";
    }
    dispatch(updateTask(updatedTask));
  }
  const deleteTask = () => {
    dispatch(removeTask({ id }));
  }
  const handleArchive = () => {
    const updatedTask = {
      id, title, desc, priority, status, category
    }
    if (status === "Archived") {
      updatedTask.status = "Pending"
    } else {
      updatedTask.status = "Archived"
    }
    dispatch(updateTask(updatedTask));
  }
  const editTask = () => {
    dispatch(setViewport("edit_task", {
      id, title, desc, priority, status, category
    }))
  }
  return (
    <div className="task-card">
      <div>
        <h3>{title}</h3> 
        {
          deleting ?
          (
            <>
              <button type="button" onClick={() => {deleteTask(); setDeleting(false);}}>Yes</button>
              <button type="button" onClick={() => setDeleting(false)}>No</button>
            </>
          ) :
          (
            <button type="button" onClick={() => setDeleting(true)}>Delete</button>
          )
        }
        <button type="button" onClick={editTask}>Edit</button>
      </div>
      <button type="button" onClick={changeStatus}>{status}</button>
      <p>{desc}</p>
      <span>Priority: {priority}</span>
      {
        (status === "Complete") &&
        (
          <button type="button" onClick={handleArchive}>Archive</button>
        )
      }
      {
        (status === "Archived") &&
        (
          <button type="button" onClick={handleArchive}>Unarchive</button>
        )
      }
    </div>
  )
}

export default TaskCard
