import "./Layout.css";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main__container">{children} </main>
      <footer>Footer Area main area</footer>
    </>
  );
};

export default Layout;
