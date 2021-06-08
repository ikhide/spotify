import React from "react";
import Header from "./Header";
export default function SubLayout({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full h-full bg-gray-200">{children}</div>
    </div>
  );
}
