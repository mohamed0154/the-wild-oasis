// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import DashList from "../ui/List";
import { Button, Drawer } from "@material-tailwind/react";
const SideBar = () => {
  return (
    <DashList>
      <div className="absolute top-1 ms-5 mt-3">
        <Drawer.Trigger
          as={Button}
          className="hidden border-slate-200 bg-slate-100 text-slate-800 hover:text-slate-200 dark:bg-slate-800 dark:text-slate-200 max-lg:block"
        >
          <FaBars />
        </Drawer.Trigger>
      </div>
    </DashList>
  );
};

export default SideBar;
