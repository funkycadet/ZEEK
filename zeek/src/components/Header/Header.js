import { useSelector } from "react-redux"

const Header = () => {
  const user = useSelector(state => state.user);
  return (
    <header>
      <h1>ZEEK</h1>
      <span>{user.name}</span>
      <img src="../../assets/MarcusAurellius.png" alt="Marcus Aurellius" />
    </header>
  )
}

export default Header
