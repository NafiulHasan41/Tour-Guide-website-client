import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const Root = () => {
  return (
    <div>
      <div className=" w-[93%] md:w-[90%] mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <div>


      </div>
    </div>
  );
};

export default Root;
