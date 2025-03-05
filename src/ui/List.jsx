// import * as React from "react";

import { Drawer, IconButton } from "@material-tailwind/react";
import SideBarBody from "../pages/SideBarBody";
import { FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const DashList = ({ children }) => {
  return (
    <>
      <Drawer>
        {children}
        <Drawer.Overlay>
          <Drawer.Panel
            placement="left"
            className="overflow-auto p-0 transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              <Drawer.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                color="secondary"
                className="absolute right-2 top-2"
                isCircular
              >
                <FaTimes size={20} />
              </Drawer.DismissTrigger>
            </div>
            <SideBarBody />
          </Drawer.Panel>
        </Drawer.Overlay>
      </Drawer>
      <aside className="h-screen max-w-[300px] bg-white dark:bg-slate-800 max-lg:hidden">
        <SideBarBody />
      </aside>
    </>
  );
};

export default DashList;
