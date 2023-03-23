import Aside from "../Aside/Aside"
import Footer from "../Footer/Footer";
import Header from "../Header/Header"
import Main from "../Main/Main"

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
