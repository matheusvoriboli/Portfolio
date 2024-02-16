import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export function Header() {
  const routes = [
    {
      path: "/",
      element: "About"
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
    <nav className="w-full relative flex items-center justify-center mb-20 animate-fade-in">
      <img className="absolute left-5 hidden md:block" src={Logo} alt="Logo" />
      <ul className="flex justify-center gap-5">
        {routes.map(route => (
          <li key={route.path}>
            <NavLink to={route.path} className={({isActive}) => isActive ? "bg-neutral-800 text-neutral-200 px-3 py-2 rounded-md" : "px-3 py-2 text-neutral-200" }>
              <span>{route.element}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
