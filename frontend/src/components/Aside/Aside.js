import AddButtons from "./AddButtons"
import CategoryFilter from "./CategoryFilter"
import PriorityFilter from "./PriorityFilter"
import StatusFilter from "./StatusFilter"

const Aside = () => {
  return (
    <aside>
      <h1>Create</h1>
      <AddButtons />
      <h1>Filter By</h1>
      <StatusFilter />
      <PriorityFilter />
      <CategoryFilter />
    </aside>
  )
}

export default Aside
