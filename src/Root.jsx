import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className=" w-[93%] md:w-[90%] mx-auto">
        <Navbar />
        <Outlet />
     
      </div>
      <div>

      <Footer/>
      </div>
    </div>
  );
};

export default Root;
