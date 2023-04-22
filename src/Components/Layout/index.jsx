import React from "react";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-5">{children}</div>
    </>
  );
}
