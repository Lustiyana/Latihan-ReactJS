import { Link, Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import useButtonLogin from "../../hooks/useButtonLogin";
import NavLink from "../component/NavLink";

const Component = (props) => {
  const status = props.status;
  console.log(status);

  if (status) {
    return (
      <button className="px-6 py-2 rounded-md hover:bg-red-400 hover:text-white border border-red-300">
        <Link to={`Register`}>Log Out</Link>
      </button>
    );
  } else {
    return (
      <button className="px-6 py-2 rounded-md hover:bg-red-400 hover:text-white border border-red-300">
        <Link to={`Register`}>Sign Up</Link>
      </button>
    );
  }
};
export default function Root() {
  const [needLogin, handleButton] = useButtonLogin();
  useEffect(() => {
    handleButton();
  });

  // function IsLogin() {
  //   const token = localStorage.getItem("token");
  //   setNeedLogin(token);
  //   console.log(needLogin);
  //   if (needLogin == null) {
  //     return (
  //       <button className="px-6 py-2 rounded-md hover:bg-red-400 hover:text-white border border-red-300">
  //         <Link to={`Register`}>Sign Up</Link>
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button className="px-6 py-2 rounded-md hover:bg-red-400 hover:text-white border border-red-300">
  //         <Link to={`Register`}>Login</Link>
  //       </button>
  //     );
  //   }
  // }

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 mt-2 w-3/4 mx-auto navbar">
        <div className="container mx-auto">
          <div className="flex space-x-5 items-center">
            <div className="grow text-xl">
              <Link to={`Home`}>My Artikel</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6 nav-components">
              <Link to={`Home`}>
                <NavLink name="Home" />
              </Link>
              <Link to={`Blogs`}>
                <NavLink name="Blogs" />
              </Link>
              <Link to={`Contact`}>
                <NavLink name="Contact" />
              </Link>
              <Component status={needLogin} />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
