import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export function Header() {
  const routes = [
    {
      path: "/",
      element: "Home"
    },
    {
      path: "/career",
      element: "Career"
    },
    {
      path: "/project",
      element: "Projects"
    }
  ]
  return (
    <nav className="w-full relative flex items-center justify-center mb-20">
      <img className="absolute left-5 hidden sm:block" src={Logo} alt="Logo" />
      <ul className="flex justify-center gap-5">
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path} className={({isActive}) => isActive ? "bg-soft-dark text-light px-3 py-2 rounded-md font-poppins font-light" : "px-3 py-2" }>
              <a>{route.element}</a>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
