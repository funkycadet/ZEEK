import Aside from "../Aside/Aside"
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Main from "../Main/Main"
import Popup from "../Popups/Popup";

const App = () => {
  return (
    <>
      <Popup />
      <div className="container">
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default App;
