import "./styles.css";
import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <div>
      <NavBar />
      <AllRoutes />
    </div>
  );
}
