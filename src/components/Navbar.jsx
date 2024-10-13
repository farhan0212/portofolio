import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  const navLink = [
    { to: "/experiences", label: "Experiences" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
  ];
  return (
    <>
      <nav className="py-4 flex ">
        <div className="flex bg-gray-300 justify-between items-center border-2 border-black rounded-full py-4 px-4  mx-auto">
          <ul className="flex space-x-4">
            {navLink.map(({ to, label }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  className="group-hover:bg-slate-400 p-4 rounded-full">
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
