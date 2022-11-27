import React from "react";
import Link from "react-router-dom";

export default function NavButton(props) {
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
}
