import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar"; 

function Admin() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Admin;