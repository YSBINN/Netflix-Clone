import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
