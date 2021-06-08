import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children, toggle }) {
  return (
    <div className="flex">
      <Navbar toggle={toggle} />
      <div>{children}</div>
    </div>
  );
}
