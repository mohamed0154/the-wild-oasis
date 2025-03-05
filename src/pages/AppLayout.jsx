import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useState } from "react";

const AppLayout = () => {
  const [dark, setDarkMode] = useState(false);
  return (
    <div className={`flex overflow-hidden ${dark && "dark"} `}>
      <div className="order-2 grid w-screen grid-rows-[auto_1fr] dark:bg-slate-900 dark:text-white">
        <Header setDarkMode={setDarkMode} />
        <main className="mx-auto w-[95%] md:max-w-[700px] xl:max-w-[950px]">
          <Outlet />
        </main>
      </div>
      <SideBar />
    </div>
  );
};

export default AppLayout;
