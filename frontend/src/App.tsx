import { Outlet } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}
