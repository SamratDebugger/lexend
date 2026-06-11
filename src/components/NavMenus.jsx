import { NavLink } from "react-router";

export default function NavMenus() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
    </>
  );
}
