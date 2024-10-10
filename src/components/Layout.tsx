import { ReactNode } from "react";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
