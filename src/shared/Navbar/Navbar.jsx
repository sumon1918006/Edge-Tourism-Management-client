import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";





const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
//  console.log(user);
  const [theme, setTheme] = useState('light');

  const handleToggle = e =>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light');
    }
  }

  const handleSignOut = () => {
    logOut((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
    })
      .then()
      .catch();
    Swal.fire({
      position: "middle",
      icon: "success",
      title: "Logout Successful",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#E8604C] border border-white text-white text-xl font-bold"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#E8604C] border border-white text-white text-xl font-bold"
              : ""
          }
          to="/all"
        >
          {" "}
          All Tourists Spot
        </NavLink>
      </li>
      {/* <li><NavLink className={({ isActive }) => (isActive ? "bg-[#E8604C] text-white text-xl font-bold" : "")}
 to="/login">Login</NavLink></li> */}

      {/* 
<li><NavLink className={({ isActive }) => (isActive ? "bg-[#E8604C] text-white text-xl font-bold" : "")}
to="/register">Register</NavLink></li> */}
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#E8604C] border border-white text-white  text-xl font-bold"
                  : ""
              }
              to="/add"
            >
              {" "}
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#E8604C] border border-white text-white  text-xl font-bold"
                  : ""
              }
              to="/mylist"
            >
              My Lists
            </NavLink>
          </li>
        </>
      )}
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#E8604C] border border-white text-white text-xl font-bold"
              : ""
          }
          to="/about"
        >
          About
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className=" bg-[#E8604C]">
      <div className="navbar bg-[#E8604C] text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow text-white bg-gray-800 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="w-16 hidden lg:block rounded-md ml-[88px]"
            src="https://i.ibb.co/XVW4smZ/download-R.png"
            alt=""
          />
          <a className="btn btn-ghost text-xl font-bold">Revily Travel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">

          <div className="flex gap-2">

            {user ? (
              <div className="flex gap-5">
                <div className="hover:tooltip hover:tooltip-open hover:tooltip-bottom z-10" data-tip={user.displayName}>
                <img src={user.photoURL} className="rounded-full  h-10" />
</div>
              
              
                <button
                  onClick={handleSignOut}
                  className="btn bg-[#E8604C] text-white font-bold text-xl  hover:btn-success hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className=" flex space-x-4">
                <Link to="/login">
                  <button className="btn bg-[#E8604C] mr-2 text-white font-bold text-xl border-[yellow] hover:btn-success hover:text-white">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn bg-[#E8604C] hidden lg:block text-white font-bold text-xl border-[yellow] hover:btn-success hover:text-white">
                    Register
                  </button>
                </Link>
              </div>
            )}

            <label onChange={handleToggle} className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                value={theme}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
