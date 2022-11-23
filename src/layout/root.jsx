import { Link, Outlet } from "react-router-dom";

import React from "react";

export default function Root() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 mt-2 w-3/4 mx-auto navbar">
        <div className="container mx-auto">
          <div className="flex space-x-5 items-center">
            <div className="grow text-xl">
              <Link to={`Home`}>My Artikel</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6 nav-components">
              <Link to={`Home`}>Home</Link>
              <Link to={`Blogs`}>Blogs</Link>
              <Link to={`Contact`}>Contacts</Link>
              <button className="bg-red-300 px-8 py-2 rounded-md hover:bg-red-400 text-white">
                <Link to={`Login`}>Login</Link>
              </button>
              <button className="px-6 py-2 rounded-md hover:bg-red-400 hover:text-white border border-red-300">
                <Link to={`Register`}>Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
