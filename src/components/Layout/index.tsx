import { FunctionComponent } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout: FunctionComponent = () => {
  return (
    <div>
      <header>Header</header>
      <div style={{ display: "flex", gap: 16 }}>
        <NavLink to={"/"} className={({ isActive }) => `${isActive ? "active" : ""} link`}>
          Home
        </NavLink>
        <NavLink to={"/example-with-layout"} className={({ isActive }) => `${isActive ? "active" : ""} link`}>
          Example page
        </NavLink>
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
