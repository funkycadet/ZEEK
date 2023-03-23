import { ADD_CATEGORY, REMOVE_CATEGORY} from "../actions/actionTypes";
import { v4 as uuid } from 'uuid';

const initialCategories = [
  {
    id: "1",
    name: "Miscellaneous"
  }
];

const CategoryReducer = (state = initialCategories, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [
        ...initialCategories, 
        {
          id: uuid(),
          name: action.payload.name
        }
      ];

    case REMOVE_CATEGORY:
      return initialCategories.filter((category) => category.id !== action.payload.id);

    default:
      return state;
  }
}
export default CategoryReducer;
