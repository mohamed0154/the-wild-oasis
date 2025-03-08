import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="order-2 grid w-screen grid-rows-[auto_1fr]">
        <Header />
        <main className="mx-auto w-[95%] md:max-w-[700px] xl:max-w-[950px]">
          <Outlet />
        </main>
      </div>
      <SideBar />
    </div>
  );
};

export default AppLayout;
