import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className=" w-[93%] md:w-[90%] mx-auto">
        <Navbar />
        <div className=" my-14 ">
        <Outlet />
        </div>
       
     
      </div>
      <div className=" pt-10 bg-gradient-to-t from-cyan-500 to-cyan-50 rounded-t-[30px] md:rounded-t-[60px]">

      <Footer/>
      </div>
    </div>
  );
};

export default Root;
