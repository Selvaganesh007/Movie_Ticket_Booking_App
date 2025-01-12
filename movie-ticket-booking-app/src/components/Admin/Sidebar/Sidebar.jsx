import "./Sidebar.scss";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { GiTheater } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Sidebar() {

  const navLinks = [
    {
      name: 'Dashboard',
      icon: <LuLayoutDashboard />,
      path: '/dashboard',
    },
    {
      name: 'Screen',
      icon: <GiTheater />,
      path: '/screen',
    },
    {
      name: 'Show',
      icon: <RiMovie2Line />,
      path: '/show',
    },
  ];

  return (
    <div className="Sidebar">
      <div className="Sidebar_ClientName">Lacs</div>
      {(navLinks || []).map((link) => {
        return (
            <Link key={link.name} className='Links' to={link.path}>
              {link.icon}
              {link.name}
            </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
