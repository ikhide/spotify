import React from "react";
import Navbar from "./Navbar";
import SubLayout from "./SubLayout";

export default function Layout({ children }) {
  return (
    <div className="flex bg-indigo-700">
      <Navbar />
      <SubLayout>{children}</SubLayout>
    </div>
  );
}
