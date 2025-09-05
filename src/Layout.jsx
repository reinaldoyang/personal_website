import { Outlet } from "react-router-dom";
import MyNavbar from "./Components/Navbar";

export function Layout() {
  return (
    <>
      <MyNavbar />       {/* Navbar shows on every page */}
      <main>
        <Outlet />       {/* Outlet renders the current route */}
      </main>
    </>
  );
}
