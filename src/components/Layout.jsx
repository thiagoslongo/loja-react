import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#FAF7F2] text-[#4A3B32] min-h-screen flex flex-col">
      <Header />
      <main className="px-4 py-4 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
