import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { DotsThreeCircle, XCircle } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const routes = [
    {
      path: "/",
      element: "About",
    },
    {
      path: "/career",
      element: "Career",
    },
    {
      path: "/project",
      element: "Projects",
    },
  ];
  return (
    <nav className="w-full relative flex items-center justify-center mb-12 md:mb-20 animate-fade-in">
      <img className="absolute left-0 md:left-5" src={Logo} alt="Logo" />
      <ul className="justify-center gap-5 hidden md:flex">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-neutral-800 text-neutral-200 px-3 py-2 rounded-md"
                  : "px-3 py-2 text-neutral-200"
              }
            >
              <span>{route.element}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        className={`flex items-center gap-2 md:hidden ms-auto ${
          mobileMenuIsOpen && "text-neutral-200"
        }`}
        onClick={() => setMobileMenuIsOpen((state) => !state)}
      >
        Menu
        {mobileMenuIsOpen ? (
          <XCircle size={27} />
        ) : (
          <DotsThreeCircle size={27} />
        )}
      </button>
      {mobileMenuIsOpen && (
        <ul className="absolute w-36 right-0 top-8 bg-neutral-800 px-1 py-2 z-40 rounded-md md:hidden">
          {routes.map((route) => (
            <li key={route.path} className="flex flex-col gap-1">
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-neutral-900 text-neutral-300 p-2 rounded-md "
                    : "p-2 text-neutral-300 "
                }
              >
                <span>{route.element}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
