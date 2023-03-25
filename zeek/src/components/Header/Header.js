import { useSelector, useDispatch } from "react-redux"
import { setViewport } from "../../redux/actions/actionCreators";

const Header = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userPopup = () => {
    dispatch(setViewport("view_user", {}));
  }
  return (
    <header>
      <h1>ZEEK</h1>
      <span onClick={userPopup}>{user.name}</span>
      <img src={require('../../assets/MarcusAurellius.png')} alt="Marcus Aurellius" onClick={userPopup}/>
    </header>
  )
}

export default Header
