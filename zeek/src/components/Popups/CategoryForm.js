import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCategory, addTask } from "../../redux/actions/actionCreators";

const CategoryForm = ({ target, edit_mode }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory({
      name
    }))
    setName("");
  }
  return (
    <div className="popup">
      <h1>{ edit_mode ? "Edit" : "Add" } Category</h1>
      <form onSubmit={handleSubmit}>
        <label for="category_name">Category name</label>
        <input type="text" name="category_name" id="category_name" value={name} onChange={handleName} required/>
        
        <input type="submit" value={edit_mode ? "Update" : "Add"}/>
      </form>
    </div>
  )
}

export default CategoryForm

