import { Link, useLocation } from "react-router-dom";
import { VITE_BASE } from "../const";
import ThemeSwitch from "./ThemeSwitch";

function Nav() {
  const nav = [
    {
      path: `${VITE_BASE}`,
      text: "Home",
    },
    {
      path: `${VITE_BASE}/collections`,
      text: "Collections",
    },
  ];

  const location = useLocation();

  return (
    <header className="flex justify-between items-center pt-5 pb-2.5">
      <h1 className="text-xl font-semibold">PokemonDB</h1>
      <nav className="px-3.5">
        <ul className="flex gap-5">
          {nav.map((v) => (
            <Link key={v.path} to={v.path}>
              <li
                className={`rounded-md py-1 px-3 border ${
                  v.path === location.pathname
                    ? "bg-sky-600 text-white border-sky-600"
                    : undefined
                }`}
              >
                {v.text}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
}

export default Nav;
