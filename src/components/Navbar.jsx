import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Aos from "aos";

function Navbar() {
  const navLink = [
    { to: "/", label: "Home" },
    { to: "/experiences", label: "Experiences" },
    { to: "/projects", label: "Projects" },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <nav className="py-4 flex sticky top-0 z-auto" data-aos="flip-right">
        <div className=" bg-gray-100 justify-between items-center border-2 border-gray-300 rounded-full py-4 px-4 mx-auto">
          <ul className="flex space-x-4">
            {navLink.map(({ to, label }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  className="group-hover:bg-gray-400 transition-colors duration-500 p-4 rounded-full">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
