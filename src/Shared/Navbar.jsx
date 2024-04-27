import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
   
    // Theme control 

    const [theme, setTheme] = useState('light')

    const handleToggle = e => {
        if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
      }

      useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
    
        // add custom data-theme attribute
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])


    //   theme control end





  const { user, loading, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const customNavLink = (
    <>
      <li >
        <NavLink to="/"  className={({ isActive }) =>
              isActive ? "text-black bg-white font-bold btn  border-black" : "font-bold my-2  md:mx-2 text-black bg-rose-500 rounded-lg btn  border-black"
            }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs"  className={({ isActive }) =>
              isActive ? "text-black bg-white font-bold" : "font-bold my-2  md:mx-2 text-black bg-rose-500 rounded-lg btn  border-black"
            }>About Us</NavLink>
      </li>
      <li className=" ">
        <NavLink to="/allTouristSpot"
        className={({ isActive }) =>
        isActive ? "text-black bg-white font-bold" : " font-bold my-2  md:mx-2 text-black bg-rose-500 rounded-lg  btn  border-black "
      }>All Tourist Spot</NavLink>
      </li>

      {user ? (
        <li>
          <NavLink to="/updateProfile" className={({ isActive }) =>
              isActive ? "text-black bg-white font-bold" : "font-bold my-2  md:mx-2 text-black bg-rose-500 rounded-lg btn  border-black"
            }>Add Tourist Spot</NavLink>
        </li>
      ) : null}
      {user ? (
        <li>
          <NavLink to="/updateProfile" className={({ isActive }) =>
              isActive ? "text-black bg-white font-bold" : "font-bold my-2  md:mx-2 text-black bg-rose-500 rounded-lg btn  border-black"
            }>My List</NavLink>
        </li>
      ) : null}
    </>
  );

  if (loading) {
    return (
      <div className=" text-center items-center justify-center mx-auto mt-20 min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User Logged out Successfully");

        toast("hello");

        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
   
    <div className="navbar bg-gradient-to-b from-cyan-500 to-cyan-200  mt-8 rounded-2xl md:p-2 shadow-2xl shadow-cyan-500/70 md:px-7">
        
      <div className="navbar-start">
        <div className="dropdown  sm:z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {customNavLink}
          </ul>
        </div>
        <Link className="btn btn-ghost  text-black text-[14px] font-extrabold">
         <img src="../../public/tourism.jpeg" alt="" className=" w-12 rounded-lg" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{customNavLink}</ul>
      </div>
      <div className="navbar-end">
        {/* Theme controller */}
        <div className="mx-1 md:mx-2" >
          <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" onChange={handleToggle} />

              {/* sun icon */}
              <svg className="swap-off fill-current w-5 h-5 md:w-10 md:h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg className="swap-on fill-current w-5 h-5 md:w-10 md:h-10 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
          </label>
        </div>
        {/* profile image */}
        <div>
          {user ? (
            <div className="avatar hover:{}">
              <div className=" w-16 mx-2 rounded-full">
                <img
                  data-tooltip-id="my-tooltip-2"
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </div>
            </div>
          ) : null}
        </div>

        {user ? (
          <button onClick={handleLogOut} className="btn bg-[#d3ffce]">
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn bg-rose-500  border-black text-black">
            Login/
            <br />
            Register
          </Link>
        )}
      </div>

      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        variant="info"
        content={user ? user.displayName : " "}
      />
      <ToastContainer />
      
    </div>
  );
};

export default Navbar;
