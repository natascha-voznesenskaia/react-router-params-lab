import { NavLink } from "react-router-dom";

const linkBase: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 8,
  textDecoration: "none",
  color: "black",
};

export function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: 10,
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          ...linkBase,
          background: isActive ? "#e6f0ff" : "transparent",
          fontWeight: isActive ? 700 : 400,
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        style={({ isActive }) => ({
          ...linkBase,
          background: isActive ? "#e6f0ff" : "transparent",
          fontWeight: isActive ? 700 : 400,
        })}
      >
        Products
      </NavLink>
    </nav>
  );
}
