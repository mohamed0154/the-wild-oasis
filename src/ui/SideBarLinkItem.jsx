/* eslint-disable react/prop-types */
import { List } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SideBarLinkItem = ({ linkName, to, icon }) => {
  return (
    <>
      <Link to={to} className="ms-5">
        {" "}
        <List.Item className="flex items-center gap-2">
          {icon}
          <span className="font-semibold">{linkName}</span>
        </List.Item>
      </Link>

      <hr className="-mx-3 my-3 border-secondary" />
    </>
  );
};

export default SideBarLinkItem;
