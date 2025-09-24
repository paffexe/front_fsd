import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../widgets/header";
import Footer from "../../widgets/footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(MainLayout);
