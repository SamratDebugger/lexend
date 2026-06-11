import { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import NavMenus from "./NavMenus";
import { Link } from "react-router";

export default function Nav() {
  const { mode } = useContext(MyContext);

  return (
    <header className="border-b border-b-base-300">
      <div className="navbar  max-w-360 mx-auto px-5">
        <div className="navbar-start gap-5">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Link to="/" className="">
            <img
              src={`/assets/images/${mode ? "logo-light.svg" : "logo-dark.svg"}`}
              alt="logo-light"
            />
          </Link>
          <div className=" hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <NavMenus />
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-4">
          <Link to="/sign-in">Sign In</Link>
          <Link
            to="/contact-us"
            className="btn rounded-full bg-linear-to-bl from-second to-main"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
