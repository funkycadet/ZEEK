import { useSelector, useDispatch } from "react-redux";
import { setViewport } from "../../redux/actions/actionCreators";

const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const editUser = () => {
    dispatch(setViewport("edit_user"));
  }
  return (
    <div className="popup">
      <h2>Your Account</h2>
      <img src={require('../../assets/MarcusAurellius.png')} alt="Profile Picture" />
      <button type="button" onClick={editUser}>Edit</button>
      <ul>
        <li>
          <h4>Username</h4>
          <span>{user.username}</span>
        </li>
        <li>
          <h4>Display name</h4>
          <span>{user.name}</span>
        </li>
        <li>
          <h4>Password</h4>
          <span>{user.Password}</span>
        </li>
        <li>
          <h4>Joined At</h4>
          <span>{user.creation_time}</span>
        </li>
        <li>
          <h4>Last Login</h4>
          <span>{user.login_time}</span>
        </li>
      </ul>
    </div>
  )
}

export default UserView
