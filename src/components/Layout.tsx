import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] px-4 pb-12">
        <div className="flex gap-28 max-w-[1200px] mx-auto flex-col md:flex-row">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
