import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <main className="min-h-[80vh] p-4">
        <div className="flex gap-28 max-w-[1200px] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
