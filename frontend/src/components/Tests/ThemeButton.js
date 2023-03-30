import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/actions/actionCreators.js'

const ThemeButton = () => {
  const dispatch = useDispatch();
  function toggle() {
    dispatch(toggleTheme());
  }
  return (
    <button onClick={toggle}>
      Toggle Theme
    </button>
  )
}

export default ThemeButton;
