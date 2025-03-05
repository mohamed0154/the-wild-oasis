// import { useState } from "react";
import { FaBars } from "react-icons/fa";
import DashList from "../ui/List";
import { Button, Drawer } from "@material-tailwind/react";
const SideBar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <DashList>
        <div className="absolute top-2 ms-5 mt-3 max-sm:top-16">
          <Drawer.Trigger as={Button} className="hidden max-lg:block">
            <FaBars />
          </Drawer.Trigger>
        </div>
      </DashList>
    </>
  );
};

export default SideBar;
