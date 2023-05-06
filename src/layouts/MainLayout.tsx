import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <main className="container mx-auto px-2.5 min-h-screen overflow-hidden">
      <Nav />
      <Outlet />
      <ScrollToTop />
    </main>
  );
}

export default MainLayout;
