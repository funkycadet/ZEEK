import { useSelector } from "react-redux"
import TaskCard from "./TaskCard";


const TaskList = ({ category }) => {
  const tasks = useSelector(state => state.tasks.filter((task) => task.category === category.id));
  const filter = useSelector(state => state.filters);
  const filteredTasks = tasks.filter((task) => {
    if (filter.status.length === 0 && filter.priority.length === 0 && task.status !== "Archived") {
      return true;
    } else if (filter.status.length !== 0 && filter.status.includes(task.status)) {
      if (filter.priority.length === 0 || filter.priority.includes(task.priority)) {
        return true;
      }
    } else if (filter.priority.length !== 0 && filter.priority.includes(task.priority)) {
      if (filter.status.length === 0 || filter.status.includes(task.status)) {
        return true;
      }
    }
    return false;
  })
  return (
    <div className="task-list">
      <h1>{category.name}</h1>
      {
        (filteredTasks.length === 0) ? (
          <span>No tasks found</span>
        ) :
        filteredTasks.map((task) => {
          return (
            <TaskCard {...task} key={task.id} />
          )
        })
      }

    </div>
  )
}

export default TaskList
