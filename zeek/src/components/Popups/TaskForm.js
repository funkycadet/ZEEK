import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTask, setViewport, updateTask } from "../../redux/actions/actionCreators";

const TaskForm = ({ target, edit_mode }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const [title, setTitle] = useState(edit_mode ? target.title : "");
  const [desc, setDesc] = useState(edit_mode ? target.desc : "");
  const [priority, setPriority] = useState(edit_mode ? target.priority : "Low");
  const [category, setCategory] = useState(edit_mode ? target.category : "1");
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleDesc = (e) => {
    setDesc(e.target.value)
  }
  const handlePriority = (e) => {
    setPriority(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit_mode) {
      dispatch(updateTask({
        id: target.id,
        title,
        desc,
        priority,
        status: target.status,
        category
      }));
      dispatch(setViewport("main"))
    } else {
      dispatch(addTask({
        title,
        desc,
        priority,
        category
      }))
    }
    setTitle("");
    setDesc("");
    setCategory("1");
  }
  return (
    <div className="popup">
      <h1>{ edit_mode ? "Edit" : "Add" } task</h1>
      <form onSubmit={handleSubmit}>
        <label for="task_title">Title</label>
        <input type="text" name="task_title" id="task_title" value={title} onChange={handleTitle} required/>
        <label for="task_id">Description</label>
        <input type="text" name="task_desc" id="task_desc" value={desc} onChange={handleDesc} />
        
        <label for="category">Category</label>
        <select id="category" onChange={handleCategory}>
          <option value={category}>{categories.find((cat) => cat.id === category).name}</option>
          {
            categories.map((cat) => {
              if (cat.id !== category) {
               return (
                <option value={cat.id}>{cat.name}</option>
               )
              }
            })
          } 
        </select>
        <label for="category">Priority</label>
        <select id="category" onChange={handlePriority}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <input type="submit" value={edit_mode ? "Update" : "Add"}/>
      </form>
    </div>
  )
}

export default TaskForm
