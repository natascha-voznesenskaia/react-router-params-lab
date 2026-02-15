import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <header>
        <Navbar />
      </header>

      <main style={{ padding: 12 }}>
        <Outlet />
      </main>
    </div>
  );
}
