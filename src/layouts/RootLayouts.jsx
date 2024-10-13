import { NavLink, Outlet } from "react-router-dom";

const navLink = [
  { to: "/experiences", label: "Experiences" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
];

function Homepage() {
  return (
    <>
      <nav className="py-4">
        <div className="flex justify-center items-center w-1/4 mx-auto border-2 border-slate-400 rounded-full py-4 px-6">
          <ul className="flex space-x-8">
            {navLink.map(({ to, label }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  className=" group-hover:bg-slate-400 transition-colors duration-300 ease-in-out p-4 rounded-2xl">
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

export default Homepage;
