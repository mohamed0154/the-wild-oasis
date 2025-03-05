import { List, Spinner } from "@material-tailwind/react";
import {
  FaCalendarCheck,
  FaCog,
  FaHome,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useLogout } from "../features/auth/useLogout";
import SideBarLinkItem from "./SideBarLinkItem";

const SideBarLinks = () => {
  const { mutate, isPending } = useLogout();
  function logout() {
    mutate();
  }
  return (
    <List className="mt-12">
      <SideBarLinkItem
        linkName="Home"
        to="/dashboard"
        icon={<FaHome className="mb-1 text-xl" />}
      />
      <SideBarLinkItem
        linkName="Cabins"
        to="/cabins"
        icon={<FaTachometerAlt className="mb-1 text-xl" />}
      />
      <SideBarLinkItem
        linkName="Users"
        to="/createUser"
        icon={<FaUsers className="mb-1 text-xl" />}
      />
      <SideBarLinkItem
        linkName="Booking"
        to="/bookings"
        icon={<FaCalendarCheck className="mb-1 text-xl" />}
      />
      <SideBarLinkItem
        linkName="Settings"
        to="/settings"
        icon={<FaCog className="mb-1 text-xl" />}
      />

      <List.Item
        onClick={logout}
        className="ms-5 cursor-pointer text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error"
      >
        <List.ItemStart>
          <MdLogout className="h-[18px] w-[18px]" />
        </List.ItemStart>
        Logout
        {isPending && <Spinner className="ms-2" color="error" size="sm" />}
      </List.Item>
    </List>
  );
};

export default SideBarLinks;
