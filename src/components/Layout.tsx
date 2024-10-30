import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ProfileInfo from "./ProfileInfo";

const Layout = () => {
  return (
    <>
      <main className="min-h-[80vh] p-4">
        <div className="flex gap-16 max-w-[1200px] mx-auto">
          <ProfileInfo />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
