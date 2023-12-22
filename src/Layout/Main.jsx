import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar/Navbar";
import Footer from "../SharedPages/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
